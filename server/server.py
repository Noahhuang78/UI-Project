from fastapi import FastAPI
from routes.event_routes import router as event_router
from routes.internship_routes import router as internship_router
from routes.club_routes import router as club_router
from routes.interest_routes import router as interest_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(event_router)
app.include_router(internship_router)
app.include_router(club_router)
app.include_router(interest_router)