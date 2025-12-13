from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import SessionLocal
from ..models import Response
from ..schemas import ResponseCreate

router = APIRouter(prefix="/response", tags=["Responses"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("")
def create_response(payload: ResponseCreate, db: Session = Depends(get_db)):
    response = Response(
        user_id=payload.user_id,
        scenario_id=payload.scenario_id,
        option_id=payload.option_id
    )
    db.add(response)
    db.commit()
    db.refresh(response)
    return {"status": "saved", "id": response.id}
