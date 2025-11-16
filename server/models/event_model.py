from db import db

events = db["myevents"]

class EventModel:
    @staticmethod
    def create(event_data):
        return events.insert_one(event_data)

    @staticmethod
    def get_all():
        return list(events.find({}, {"_id": 0}))

    @staticmethod
    def get_by_id(event_id):
        return events.find_one({"id": event_id}, {"_id": 0})

    @staticmethod
    def update(event_id, data):
        return events.update_one({"id": event_id}, {"$set": data})

    @staticmethod
    def delete(event_id):
        return events.delete_one({"id": event_id})
