from fastapi import HTTPException
from models.interest_model import InterestModel

class InterestController:
    @staticmethod
    def create_interest(interest):
        InterestModel.create(interest.dict())
        return {"message": "interest created"}

    @staticmethod
    def get_interests():
        return InterestModel.get_all()

    @staticmethod
    def get_interest(interest: str):
        interest = InterestModel.get_by_interest(interest)
        if not interest:
            raise HTTPException(404, "interest not found")
        return interest

    @staticmethod
    def update_interest(interest: str, data):
        InterestModel.update(interest, data.dict())
        return {"message": "interest updated"}

    @staticmethod
    def delete_interest(interest: str):
        InterestModel.delete(interest)
        return {"message": "interest deleted"}
