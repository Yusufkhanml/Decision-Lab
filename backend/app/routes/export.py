from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from fastapi.responses import StreamingResponse
import csv
import io

from ..database import SessionLocal
from ..models import Response

router = APIRouter(prefix="/export", tags=["Export"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/responses")
def export_responses(db: Session = Depends(get_db)):
    responses = db.query(Response).all()

    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow(["id", "user_id", "scenario_id", "option_id", "created_at"])

    for r in responses:
        writer.writerow([r.id, r.user_id, r.scenario_id, r.option_id, r.created_at])

    output.seek(0)

    return StreamingResponse(
        output,
        media_type="text/csv",
        headers={"Content-Disposition": "attachment; filename=responses.csv"}
    )
