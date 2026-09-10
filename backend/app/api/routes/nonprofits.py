from fastapi import APIRouter

from app.schemas.nonprofits import NonprofitCreate
from app.services.nonprofit_service import create_nonprofit

router = APIRouter()

@router.post("/nonprofits")
async def create_nonprofit_route(nonprofit: NonprofitCreate):
    return await create_nonprofit(nonprofit)