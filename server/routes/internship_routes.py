from fastapi import APIRouter
from controllers.internship_controller import InternshipController
from schemas.internship_schema import InternshipSchema

router = APIRouter(prefix="/myinternships")

@router.post("/")
def create_internship(internship: InternshipSchema):
    return InternshipController.create_internship(internship)

@router.get("/")
def get_internships():
    return InternshipController.get_internships()

@router.get("/{internship_id}")
def get_internship(internship_id: str):
    return InternshipController.get_internship(internship_id)

@router.put("/{internship_id}")
def update_internship(internship_id: str, internship: InternshipSchema):
    return InternshipController.update_internship(internship_id, internship)

@router.delete("/{internship_id}")
def delete_internship(internship_id: str):
    return InternshipController.delete_internship(internship_id)
