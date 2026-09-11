from sqlalchemy.orm import Session

from app.models.nonprofit import Nonprofit
from app.schemas.nonprofits import NonprofitCreate


def create_nonprofit(nonprofit: NonprofitCreate, db: Session):
    db_nonprofit = Nonprofit(
        organization_name=nonprofit.organization_name,
        organization_type=[item.value for item in nonprofit.organization_type],
        website=str(nonprofit.website),
        email=str(nonprofit.email),
        description=nonprofit.description,
        city=nonprofit.city,
        state=nonprofit.state.value,
        funding_instrument_type=[
            item.value for item in nonprofit.funding_instrument_type
        ],
        focus_area=nonprofit.focus_area,
        population_served=nonprofit.population_served,
        funding_need=nonprofit.funding_need,
        organization_size=nonprofit.organization_size.value,
        geographic_service_area=nonprofit.geographic_service_area,
        project_budget=nonprofit.project_budget,
        project_start_date=nonprofit.project_start_date,
        project_end_date=nonprofit.project_end_date,
    )

    db.add(db_nonprofit)
    db.commit()
    db.refresh(db_nonprofit)

    return db_nonprofit