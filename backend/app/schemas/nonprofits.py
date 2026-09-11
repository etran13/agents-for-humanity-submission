from datetime import date
from pydantic import BaseModel, EmailStr, HttpUrl
from backend.app.schemas.enums import (
    FundingInstrumentType,
    OrganizationSize,
    OrganizationType,
    State,
)
class NonprofitCreate(BaseModel):
    organization_name: str
    organization_type: list[OrganizationType]

    website: HttpUrl
    email: EmailStr

    description: str
    city: str
    state: State

    funding_instrument_type: list[FundingInstrumentType]

    focus_area: list[str]
    population_served: str
    funding_need: str

    organization_size: OrganizationSize
    geographic_service_area: str

    project_budget: float
    project_start_date: date
    project_end_date: date