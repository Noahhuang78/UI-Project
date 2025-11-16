from fastapi import APIRouter
from controllers.interest_controller import InterestController
from schemas.interest_schema import InterestSchema

router = APIRouter(prefix="/myinterests")

@router.post("/")
def create_interest(interest: InterestSchema):
    return InterestController.create_interest(interest)

@router.get("/")
def get_interests():
    return InterestController.get_interests()

@router.get("/{interest_id}")
def get_interest(interest_id: str):
    return InterestController.get_interest(interest_id)

@router.put("/{interest_id}")
def update_interest(interest_id: str, interest: InterestSchema):
    return InterestController.update_interest(interest_id, interest)

@router.delete("/{interest_id}")
def delete_interest(interest_id: str):
    return InterestController.delete_interest(interest_id)
