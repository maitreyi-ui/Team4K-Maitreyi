from fastapi import FastAPI

app = FastAPI(title="ClueLens API")

@app.get("/")
def root():
    return {"message": "ClueLens backend placeholder"}
