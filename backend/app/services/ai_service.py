import json
import logging
import os
from pathlib import Path
from typing import Any, Dict

from dotenv import load_dotenv
import google.generativeai as genai

BASE_DIR = Path(__file__).resolve().parents[2]
load_dotenv(BASE_DIR / ".env")

API_KEY = os.getenv("GEMINI_API_KEY") or os.getenv("GEMINI_API_KEYS")

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

if API_KEY:
    try:
        genai.configure(api_key=API_KEY)
    except Exception:
        logger.exception("Failed to configure google.generativeai with provided API key")

PROMPT = """
You are ClueLens, an AI digital forensic investigation assistant.

Analyze the following extracted evidence text and return ONLY valid JSON.

Return exactly this structure:

{
  "summary": "...",
  "people": [],
  "locations": [],
  "dates": [],
  "evidence": [],
  "timeline": [],
  "confidence": "High"
}

Do not return markdown.
Do not use ```json.
Return only JSON.

Evidence:
<<<EVIDENCE>>>
"""


def _extract_json_from_text(text: str):
    # Try direct load first
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        pass

    # Strip common markdown code fences
    candidate = text.strip()
    if candidate.startswith("```json") and candidate.endswith("```"):
        candidate = candidate[len("```json"):-3].strip()
        try:
            return json.loads(candidate)
        except json.JSONDecodeError:
            pass
    if candidate.startswith("```") and candidate.endswith("```"):
        candidate = candidate[3:-3].strip()
        try:
            return json.loads(candidate)
        except json.JSONDecodeError:
            pass

    # Try to extract first {...} block
    start = text.find("{")
    end = text.rfind("}")
    if start != -1 and end != -1 and end > start:
        fragment = text[start : end + 1]
        try:
            return json.loads(fragment)
        except json.JSONDecodeError:
            pass

    # Try to extract first [...] block
    start = text.find("[")
    end = text.rfind("]")
    if start != -1 and end != -1 and end > start:
        fragment = text[start : end + 1]
        try:
            return json.loads(fragment)
        except json.JSONDecodeError:
            pass

    # Maybe the model returned a bare JSON string: "summary text"
    stripped = text.strip()
    try:
        simple = json.loads(stripped)
        if isinstance(simple, str):
            return simple
    except Exception:
        pass

    raise json.JSONDecodeError("No JSON object could be decoded from response", text, 0)


def analyze_evidence(text: str) -> Dict[str, Any]:
    defaults = {
        "summary": "",
        "people": [],
        "locations": [],
        "dates": [],
        "evidence": [],
        "timeline": [],
        "confidence": "Low",
    }

    if not text or not text.strip():
        return {**defaults, "confidence": "Low"}

    if not API_KEY:
        logger.warning("Gemini API key not configured")
        return {**defaults, "error": "Gemini API key not configured."}

    try:
        model = genai.GenerativeModel("gemini-1.5-flash")

        prompt_text = PROMPT.replace('<<<EVIDENCE>>>', text)

        response = model.generate_content(
            prompt_text,
            generation_config={
                "temperature": 0.2,
                "max_output_tokens": 900,
            },
        )

        output = getattr(response, "text", None) or str(response)

        logger.info("GEMINI RAW RESPONSE:\n%s", output)

        # Clean fenced markdown if present
        cleaned = output.strip()
        if cleaned.startswith("```json"):
            cleaned = cleaned.replace("```json", "").replace("```", "").strip()
        elif cleaned.startswith("```"):
            cleaned = cleaned.replace("```", "").strip()

        try:
            parsed = _extract_json_from_text(cleaned)
        except json.JSONDecodeError:
            logger.warning("Failed to parse JSON from Gemini response; returning defaults. Raw response:\n%s", output)
            return {**defaults, "error": "Gemini returned invalid JSON.", "raw_response": output}

        # If parsed is a simple string, treat as summary
        if isinstance(parsed, str):
            return {
                "summary": parsed,
                "people": [],
                "locations": [],
                "dates": [],
                "evidence": [],
                "timeline": [],
                "confidence": "High",
            }

        if isinstance(parsed, list):
            return {
                "summary": "",
                "people": [],
                "locations": [],
                "dates": [],
                "evidence": parsed,
                "timeline": [],
                "confidence": "High",
            }

        if not isinstance(parsed, dict):
            logger.warning("Parsed Gemini response is not a dict: %s", type(parsed))
            return {**defaults, "error": "Unexpected Gemini response type.", "raw_response": output}

        return {
            "summary": parsed.get("summary", ""),
            "people": parsed.get("people", []),
            "locations": parsed.get("locations", []),
            "dates": parsed.get("dates", []),
            "evidence": parsed.get("evidence", []),
            "timeline": parsed.get("timeline", []),
            "confidence": parsed.get("confidence", "High"),
        }

    except Exception as e:
        logger.exception("Unexpected error while calling Gemini: %s", e)
        return {**defaults, "error": str(e)}