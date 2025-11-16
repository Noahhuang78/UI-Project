from db import db

clubs = db["myclubs"]

class ClubModel:
    @staticmethod
    def create(club_data):
        return clubs.insert_one(club_data)

    @staticmethod
    def get_all():
        return list(clubs.find({}, {"_id": 0}))

    @staticmethod
    def get_by_id(club_id):
        return clubs.find_one({"id": club_id}, {"_id": 0})

    @staticmethod
    def update(club_id, data):
        return clubs.update_one({"id": club_id}, {"$set": data})

    @staticmethod
    def delete(club_id):
        return clubs.delete_one({"id": club_id})
