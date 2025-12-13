from sqlalchemy import Column, Integer, String, Text, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .database import Base


class Scenario(Base):
    __tablename__ = "scenarios"

    scenario_id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    body = Column(Text, nullable=False)


class ScenarioOption(Base):
    __tablename__ = "scenario_options"

    option_id = Column(Integer, primary_key=True, index=True)
    scenario_id = Column(Integer, ForeignKey("scenarios.scenario_id"))
    option_text = Column(Text, nullable=False)
    choice_type = Column(String, nullable=False)
    display_order = Column(Integer, nullable=False)


class Response(Base):
    __tablename__ = "responses"

    response_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String, nullable=False)
    scenario_id = Column(Integer, nullable=False)
    option_id = Column(Integer, nullable=False)
    choice_type = Column(String, nullable=False)
    choice_text = Column(Text, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
