from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import upload_router

app = FastAPI(title="ClueLens API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:3002",
        "http://localhost:3003",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:3001",
        "http://127.0.0.1:3002",
        "http://127.0.0.1:3003",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(upload_router, prefix="/upload", tags=["upload"])

@app.get("/")
def root():
    return {"message": "ClueLens backend placeholder"}
