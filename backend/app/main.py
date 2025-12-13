from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.app.routes import scenarios, responses, export

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ NO prefix here
app.include_router(scenarios.router)
app.include_router(responses.router)
app.include_router(export.router)
