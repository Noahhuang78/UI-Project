from fastapi import APIRouter
from controllers.club_controller import ClubController
from schemas.club_schema import ClubSchema

router = APIRouter(prefix="/myclubs")

@router.post("/")
def create_club(club: ClubSchema):
    return ClubController.create_club(club)

@router.get("/")
def get_clubs():
    return ClubController.get_clubs()

@router.get("/{club_id}")
def get_club(club_id: str):
    return ClubController.get_club(club_id)

@router.put("/{club_id}")
def update_club(club_id: str, club: ClubSchema):
    return ClubController.update_club(club_id, club)

@router.delete("/{club_id}")
def delete_club(club_id: str):
    return ClubController.delete_club(club_id)
