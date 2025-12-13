from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import scenarios, responses, export

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(scenarios.router, prefix="/api")
app.include_router(responses.router, prefix="/api")
app.include_router(export.router, prefix="/api")
