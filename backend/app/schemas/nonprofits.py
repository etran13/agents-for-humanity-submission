from pydantic import BaseModel, HttpUrl, EmailStr

class NonprofitCreate(BaseModel):
    organization_name: str
    website: HttpUrl
    email: EmailStr
    description: str