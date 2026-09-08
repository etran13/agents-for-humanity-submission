from fastapi import FastAPI

from app.api.routes.health import router as health_router
from app.api.routes.nonprofits import router as nonprofits_router


app = FastAPI(
    title="FundFind API",
    description="Backend API for the FundFind nonprofit funding platform",
    version="0.1.0",
)

app.include_router(
    health_router,
    prefix="/api",
)

app.include_router(
    nonprofits_router,
    prefix="/api",
)