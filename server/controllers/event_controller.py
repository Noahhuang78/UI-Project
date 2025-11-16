from fastapi import HTTPException
from models.event_model import EventModel

class EventController:
    @staticmethod
    def create_event(event):
        EventModel.create(event.dict())
        return {"message": "Event created"}

    @staticmethod
    def get_events():
        return EventModel.get_all()

    @staticmethod
    def get_event(event_id: str):
        event = EventModel.get_by_id(event_id)
        if not event:
            raise HTTPException(404, "Event not found")
        return event

    @staticmethod
    def update_event(event_id: str, data):
        EventModel.update(event_id, data.dict())
        return {"message": "Event updated"}

    @staticmethod
    def delete_event(event_id: str):
        EventModel.delete(event_id)
        return {"message": "Event deleted"}
