from db import db

internships = db["myinternships"]

class InternshipModel:
    @staticmethod
    def create(internship_data):
        return internships.insert_one(internship_data)

    @staticmethod
    def get_all():
        return list(internships.find({}, {"_id": 0}))

    @staticmethod
    def get_by_id(internship_id):
        return internships.find_one({"id": internship_id}, {"_id": 0})

    @staticmethod
    def update(internship_id, data):
        return internships.update_one({"id": internship_id}, {"$set": data})

    @staticmethod
    def delete(internship_id):
        return internships.delete_one({"id": internship_id})
