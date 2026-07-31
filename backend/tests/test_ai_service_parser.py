from app.services.ai_service import _extract_json_from_text


def test_direct_json_object():
    txt = '{"summary": "hello", "people": ["Alice"]}'
    parsed = _extract_json_from_text(txt)
    assert isinstance(parsed, dict)
    assert parsed["summary"] == "hello"
    assert parsed["people"] == ["Alice"]


def test_fenced_json_block():
    txt = "```json\n{\n  \"summary\": \"fenced\"\n}\n```"
    parsed = _extract_json_from_text(txt)
    assert isinstance(parsed, dict)
    assert parsed["summary"] == "fenced"


def test_plain_code_fence():
    txt = "```\n{\"summary\": \"plain fence\"}\n```"
    parsed = _extract_json_from_text(txt)
    assert isinstance(parsed, dict)
    assert parsed["summary"] == "plain fence"


def test_embedded_json_in_text():
    txt = "Some preamble text. {\"summary\": \"embedded\", \"people\": []} Some trailing text"
    parsed = _extract_json_from_text(txt)
    assert isinstance(parsed, dict)
    assert parsed["summary"] == "embedded"


def test_bare_json_string_summary():
    txt = '"Just a short summary."'
    parsed = _extract_json_from_text(txt)
    assert isinstance(parsed, str)
    assert parsed == "Just a short summary."


def test_json_array_returned():
    txt = "[\"a\", \"b\"]"
    parsed = _extract_json_from_text(txt)
    assert isinstance(parsed, list)
    assert parsed == ["a", "b"]
