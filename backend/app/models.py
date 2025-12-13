from sqlalchemy import Column, Integer, String, Text, ForeignKey, TIMESTAMP
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from .database import Base

class Scenario(Base):
    __tablename__ = "scenarios"

    scenario_id = Column(Integer, primary_key=True)
    domain = Column(String(50), nullable=False)
    title = Column(String(100), nullable=False)
    story_text = Column(Text, nullable=False)
    image_url = Column(Text)
    gif_url = Column(Text)
    audio_url = Column(Text)

    options = relationship("ScenarioOption", back_populates="scenario")


class ScenarioOption(Base):
    __tablename__ = "scenario_options"

    option_id = Column(Integer, primary_key=True)
    scenario_id = Column(Integer, ForeignKey("scenarios.scenario_id", ondelete="CASCADE"))
    option_text = Column(Text, nullable=False)
    choice_type = Column(String(20), nullable=False)
    display_order = Column(Integer, nullable=False)

    scenario = relationship("Scenario", back_populates="options")


class Response(Base):
    __tablename__ = "responses"

    response_id = Column(Integer, primary_key=True)
    user_id = Column(String(100), nullable=False)
    scenario_id = Column(Integer, nullable=False)
    option_id = Column(Integer, nullable=False)
    choice_type = Column(String(20), nullable=False)
    choice_text = Column(Text, nullable=False)
    created_at = Column(TIMESTAMP, server_default=func.now())
