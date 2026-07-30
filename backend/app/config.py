from pydantic import BaseSettings

class Settings(BaseSettings):
    gemini_api_key: str = ""
    database_url: str = "sqlite:///./backend/app/database/cluelens.db"
    upload_dir: str = "./backend/app/uploads"

    class Config:
        env_file = ".env"

settings = Settings()
