from fastapi import APIRouter
from controllers.event_controller import EventController
from schemas.event_schema import EventSchema

router = APIRouter(prefix="/myevents")

@router.post("/")
def create_event(event: EventSchema):
    return EventController.create_event(event)

@router.get("/")
def get_events():
    return EventController.get_events()

@router.get("/{event_id}")
def get_event(event_id: str):
    return EventController.get_event(event_id)

@router.put("/{event_id}")
def update_event(event_id: str, event: EventSchema):
    return EventController.update_event(event_id, event)

@router.delete("/{event_id}")
def delete_event(event_id: str):
    return EventController.delete_event(event_id)
