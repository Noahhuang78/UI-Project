from fastapi import HTTPException
from models.club_model import ClubModel

class ClubController:
    @staticmethod
    def create_club(club):
        ClubModel.create(club.dict())
        return {"message": "club created"}

    @staticmethod
    def get_clubs():
        return ClubModel.get_all()

    @staticmethod
    def get_club(club_id: str):
        club = ClubModel.get_by_id(club_id)
        if not club:
            raise HTTPException(404, "club not found")
        return club

    @staticmethod
    def update_club(club_id: str, data):
        ClubModel.update(club_id, data.dict())
        return {"message": "club updated"}

    @staticmethod
    def delete_club(club_id: str):
        ClubModel.delete(club_id)
        return {"message": "club deleted"}
