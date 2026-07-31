from pathlib import Path
from typing import List

from fastapi import APIRouter, File, HTTPException, UploadFile

from app.config import settings
from app.services.ai_service import analyze_evidence
from app.services.file_service import save_upload_files

router = APIRouter()

ALLOWED_EXTENSIONS = {".pdf", ".txt", ".docx", ".png", ".jpg", ".jpeg", ".bmp", ".gif", ".tiff", ".webp"}


def _extract_text_from_txt(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8", errors="ignore")
    except Exception as exc:
        raise RuntimeError(f"Failed to read text file: {exc}") from exc


@router.post("/", summary="Upload evidence files")
async def upload_files(files: List[UploadFile] = File(...)):
    try:
        saved_files = save_upload_files(files)
    except ValueError as exc:
        raise HTTPException(status_code=415, detail=str(exc))

    extracted_texts = []
    for filename in saved_files:
        file_path = Path(settings.upload_dir) / filename
        extension = file_path.suffix.lower()

        if extension == ".txt":
            extracted_texts.append(_extract_text_from_txt(file_path))
        elif extension == ".pdf":
            # Placeholder: implement PDF text extraction here
            extracted_texts.append("")
        elif extension == ".docx":
            # Placeholder: implement DOCX text extraction here
            extracted_texts.append("")
        else:
            # Placeholder: implement image OCR extraction here
            extracted_texts.append("")

    combined_text = "\n\n".join(text for text in extracted_texts if text.strip())
    if not combined_text:
        raise HTTPException(status_code=400, detail="Uploaded file(s) contained no extractable text")

    analysis = analyze_evidence(combined_text)

    # Do not raise HTTPExceptions for malformed Gemini output; instead include
    # any error information in the response so the frontend can display it.
    if analysis.get("confidence") == "Low" and analysis.get("error"):
        # attach a warning key for the frontend and leave the analysis structure intact
        analysis["warning"] = analysis.get("error")

    return {
        "uploaded_files": saved_files,
        "analysis": analysis,
    }
