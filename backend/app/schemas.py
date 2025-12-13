from pydantic import BaseModel

class ResponseCreate(BaseModel):
    user_id: str
    scenario_id: int
    option_id: int
