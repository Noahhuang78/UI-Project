from db import db

interests = db["myinterests"]

class InterestModel:
    @staticmethod
    def create(interest):
        return interests.insert_one(interest)

    @staticmethod
    def get_all():
        return list(interests.find({}, {"_interest": 0}))

    @staticmethod
    def get_by_interest(interest):
        return interests.find_one({"interest": interest}, {"_interest": 0})

    @staticmethod
    def update(interest, data):
        return interests.update_one({"interest": interest}, {"$set": data})

    @staticmethod
    def delete(interest):
        return interests.delete_one({"interest": interest})
