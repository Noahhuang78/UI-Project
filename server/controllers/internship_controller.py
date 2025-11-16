from fastapi import HTTPException
from models.internship_model import InternshipModel

class InternshipController:
    @staticmethod
    def create_internship(internship):
        InternshipModel.create(internship.dict())
        return {"message": "internship created"}

    @staticmethod
    def get_internships():
        return InternshipModel.get_all()

    @staticmethod
    def get_internship(internship_id: str):
        internship = InternshipModel.get_by_id(internship_id)
        if not internship:
            raise HTTPException(404, "internship not found")
        return internship

    @staticmethod
    def update_internship(internship_id: str, data):
        InternshipModel.update(internship_id, data.dict())
        return {"message": "internship updated"}

    @staticmethod
    def delete_internship(internship_id: str):
        InternshipModel.delete(internship_id)
        return {"message": "internship deleted"}
