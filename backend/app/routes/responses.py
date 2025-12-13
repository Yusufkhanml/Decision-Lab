from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import SessionLocal
from ..models import Response, ScenarioOption
from ..schemas import ResponseCreate

router = APIRouter(prefix="/response", tags=["Responses"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/")
def submit_response(payload: ResponseCreate, db: Session = Depends(get_db)):
    option = db.query(ScenarioOption).filter(
        ScenarioOption.option_id == payload.option_id
    ).first()

    if not option:
        raise HTTPException(status_code=404, detail="Invalid option")

    response = Response(
        user_id=payload.user_id,
        scenario_id=payload.scenario_id,
        option_id=payload.option_id,
        choice_type=option.choice_type,
        choice_text=option.option_text
    )

    db.add(response)
    db.commit()
    db.refresh(response)

    return {"status": "saved"}
