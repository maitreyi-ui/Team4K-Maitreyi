import shutil
from pathlib import Path
from typing import Iterable

from fastapi import UploadFile

from app.config import settings

ALLOWED_EXTENSIONS = {
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


def _ensure_upload_dir() -> Path:
    upload_path = Path(settings.upload_dir)
    upload_path.mkdir(parents=True, exist_ok=True)
    return upload_path


def save_upload_file(upload_file: UploadFile) -> str:
    filename = Path(upload_file.filename or "upload").name
    extension = Path(filename).suffix.lower()
    if extension not in ALLOWED_EXTENSIONS:
        raise ValueError("Unsupported file type. Allowed types: PDF, DOCX, TXT, images.")

    upload_path = _ensure_upload_dir()
    destination = upload_path / filename
    counter = 1
    while destination.exists():
        destination = upload_path / f"{destination.stem}-{counter}{destination.suffix}"
        counter += 1

    with destination.open("wb") as buffer:
        shutil.copyfileobj(upload_file.file, buffer)

    return destination.name


def save_upload_files(upload_files: Iterable[UploadFile]) -> list[str]:
    saved_files = []
    for upload_file in upload_files:
        saved_files.append(save_upload_file(upload_file))
    return saved_files
