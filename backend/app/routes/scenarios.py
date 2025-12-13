from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from ..database import SessionLocal
from ..models import Scenario, ScenarioOption

router = APIRouter(prefix="/scenarios", tags=["Scenarios"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/{scenario_id}")
def fetch_scenario(scenario_id: int, db: Session = Depends(get_db)):
    # ✅ CORRECT PRIMARY KEY USAGE
    scenario = (
        db.query(Scenario)
        .filter(Scenario.scenario_id == scenario_id)
        .first()
    )

    if not scenario:
        raise HTTPException(status_code=404, detail="Scenario not found")

    options = (
        db.query(ScenarioOption)
        .filter(ScenarioOption.scenario_id == scenario_id)
        .order_by(ScenarioOption.display_order)
        .all()
    )

    return {
        "scenario_id": scenario.scenario_id,
        "title": scenario.title,
        "description": scenario.description,
        "options": [
            {
                "option_id": opt.option_id,
                "text": opt.text,
                "choice_type": opt.choice_type,
                "display_order": opt.display_order
            }
            for opt in options
        ]
    }
