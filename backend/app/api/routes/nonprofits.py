from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.schemas.nonprofits import NonprofitCreate
from app.services.nonprofit_service import create_nonprofit

router = APIRouter()


@router.post("/nonprofits")
async def create_nonprofit_route(
    nonprofit: NonprofitCreate,
    db: Session = Depends(get_db),
):
    return create_nonprofit(nonprofit, db)