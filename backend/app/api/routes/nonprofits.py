from fastapi import APIRouter, Depends

from sqlalchemy.orm import Session

from app.database import get_db
from app.schemas.nonprofits import NonprofitCreate
from app.services.nonprofit_service import create_nonprofit
from app.services.search_term_service import generate_search_terms

router = APIRouter()


@router.post("/nonprofits")
async def create_nonprofit_route(
    nonprofit: NonprofitCreate,
    db: Session = Depends(get_db),
):
    search_terms = generate_search_terms(
        nonprofit.description,
        nonprofit.focus_area,
    )

    print("Generated search terms:", search_terms)

    return create_nonprofit(nonprofit, db)