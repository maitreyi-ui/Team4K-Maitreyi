from pathlib import Path

from PIL import Image
from PyPDF2 import PdfReader
from docx import Document
import pytesseract

SUPPORTED_EXTENSIONS = {
    ".pdf",
    ".docx",
    ".txt",
    ".png",
    ".jpg",
    ".jpeg",
    ".bmp",
    ".gif",
    ".tiff",
    ".webp",
}


def _extract_text_from_txt(path: Path) -> str:
    with path.open("r", encoding="utf-8", errors="ignore") as stream:
        return stream.read()


def _extract_text_from_docx(path: Path) -> str:
    document = Document(path)
    return "\n".join(paragraph.text for paragraph in document.paragraphs)


def _extract_text_from_pdf(path: Path) -> str:
    reader = PdfReader(path)
    pages = [page.extract_text() or "" for page in reader.pages]
    return "\n".join(pages)


def _extract_text_from_image(path: Path) -> str:
    image = Image.open(path)
    return pytesseract.image_to_string(image)


def run(path: Path) -> str:
    extension = path.suffix.lower()
    if extension not in SUPPORTED_EXTENSIONS:
        raise ValueError(f"Unsupported file type: {extension}")

    if extension == ".txt":
        return _extract_text_from_txt(path)
    if extension == ".docx":
        return _extract_text_from_docx(path)
    if extension == ".pdf":
        return _extract_text_from_pdf(path)
    return _extract_text_from_image(path)
