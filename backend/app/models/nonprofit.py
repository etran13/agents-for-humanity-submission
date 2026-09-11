from datetime import date

from sqlalchemy import Date, Float, Integer, JSON, String
from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class Nonprofit(Base):
    __tablename__ = "nonprofits"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)

    organization_name: Mapped[str] = mapped_column(String, nullable=False)

    organization_type: Mapped[list] = mapped_column(JSON, nullable=False)

    website: Mapped[str] = mapped_column(String, nullable=False)
    email: Mapped[str] = mapped_column(String, nullable=False)

    description: Mapped[str] = mapped_column(String, nullable=False)
    city: Mapped[str] = mapped_column(String, nullable=False)
    state: Mapped[str] = mapped_column(String, nullable=False)

    funding_instrument_type: Mapped[list] = mapped_column(JSON, nullable=False)

    focus_area: Mapped[list] = mapped_column(JSON, nullable=False)
    population_served: Mapped[str] = mapped_column(String, nullable=False)
    funding_need: Mapped[str] = mapped_column(String, nullable=False)

    organization_size: Mapped[str] = mapped_column(String, nullable=False)
    geographic_service_area: Mapped[str] = mapped_column(String, nullable=False)

    project_budget: Mapped[float] = mapped_column(Float, nullable=False)
    project_start_date: Mapped[date] = mapped_column(Date, nullable=False)
    project_end_date: Mapped[date] = mapped_column(Date, nullable=False)