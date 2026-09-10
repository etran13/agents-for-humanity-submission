from app.schemas.nonprofits import NonprofitCreate

async def create_nonprofit(nonprofit: NonprofitCreate):
    return {
        "message": "Nonprofit information received",
        "data": nonprofit,
    }