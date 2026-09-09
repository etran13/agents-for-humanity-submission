from datetime import date
from pydantic import BaseModel, EmailStr, HttpUrl


class NonprofitCreate(BaseModel):
    organization_name: str
    organization_type: str

    website: HttpUrl
    email: EmailStr

    description: str
    city: str
    state: str

    focus_area: list[str]
    population_served: str
    funding_need: str

    organization_size: str
    geographic_service_area: str

    project_budget: float
    project_start_date: date
    project_end_date: date