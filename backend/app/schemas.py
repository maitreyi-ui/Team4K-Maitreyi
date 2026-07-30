from pydantic import BaseModel

class PlaceholderBase(BaseModel):
    name: str

class Placeholder(PlaceholderBase):
    id: int

    class Config:
        orm_mode = True
