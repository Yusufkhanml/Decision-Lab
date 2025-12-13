from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import SessionLocal
from ..models import Response, ScenarioOption
from ..schemas import ResponseCreate

router = APIRouter(prefix="/api/response", tags=["Responses"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/")
def create_response(payload: ResponseCreate, db: Session = Depends(get_db)):
    option = (
        db.query(ScenarioOption)
        .filter(ScenarioOption.option_id == payload.option_id)
        .first()
    )

    if not option:
        raise HTTPException(status_code=404, detail="Option not found")

    new_response = Response(
        user_id=payload.user_id,
        scenario_id=payload.scenario_id,
        option_id=payload.option_id,
        choice_type=option.choice_type,      # REQUIRED
        choice_text=option.option_text       # REQUIRED
    )

    db.add(new_response)
    db.commit()
    db.refresh(new_response)

    return {
        "status": "saved",
        "response_id": new_response.response_id
    }
