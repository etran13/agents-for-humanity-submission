from fastapi import APIRouter

from app.schemas.nonprofits import NonprofitCreate

router = APIRouter()

@router.post("/nonprofits")
async def create_nonprofit(nonprofit: NonprofitCreate):
    return {
        "message": "Nonprofit information received",
        "data": nonprofit,
    }