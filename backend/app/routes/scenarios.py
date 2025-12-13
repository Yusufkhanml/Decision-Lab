from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import SessionLocal
from ..models import Scenario, ScenarioOption

router = APIRouter(prefix="/api/scenarios", tags=["Scenarios"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/{scenario_id}")
def get_scenario(scenario_id: int, db: Session = Depends(get_db)):
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
        "scenario": {
            "scenario_id": scenario.scenario_id,
            "domain": scenario.domain,
            "title": scenario.title,
            "story_text": scenario.story_text,
            "image_url": scenario.image_url,
            "gif_url": scenario.gif_url,
            "audio_url": scenario.audio_url,
        },
        "options": [
            {
                "option_id": o.option_id,
                "option_text": o.option_text,
                "choice_type": o.choice_type,
                "display_order": o.display_order,
            }
            for o in options
        ]
    }
