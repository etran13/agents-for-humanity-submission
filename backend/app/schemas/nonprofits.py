from pydantic import BaseModel, HttpUrl, EmailStr

class NonprofitCreate(BaseModel):
    organization_name: str
    website: HttpUrl
    email: EmailStr
    description: str
    location: str
    focus_area: list[str]
    population_served: str
    funding_need: str