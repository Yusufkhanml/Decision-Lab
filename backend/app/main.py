from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import scenarios, responses, export

app = FastAPI(title="Decision Lab API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(scenarios.router)
app.include_router(responses.router)
app.include_router(export.router)

@app.get("/")
def health():
    return {"status": "ok"}
