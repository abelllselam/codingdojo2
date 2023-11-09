from flask_app.config.mysqlconnection import connectToMySQL
from flask import Flask, flash
from flask_app.models import user

DB = "py_belt_exam_2"


class Sasquatch:
    def __init__(self, data):
        self.id = data["id"]
        self.location = data["location"]
        self.date_of_sighting = data["date_of_sighting"]
        self.number_of_sasquatch = data["number_of_sasquatch"]
        self.what_happened = data["what_happened"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.user_id = data["user_id"]
        self.user = []

    # save a new record to the sasquatchs table
    @classmethod
    def save(cls, data):
        # query to save a new record
        query = """
                INSERT INTO sasquatchs (location, date_of_sighting, number_of_sasquatch, what_happened, user_id)
                VALUES(%(location)s,%(date_of_sighting)s,%(number_of_sasquatch)s,%(what_happened)s,%(user_id)s)
        """

        results = connectToMySQL(DB).query_db(query, data)

        return results

    @staticmethod
    def Validate_sasquatch(sasquatch):
        is_valid = True  # we assume this is true

        # test whether a field matches the pattern

        if len(sasquatch["location"]) < 2:
            flash("Location must be at least 2 characters.", "sasquatch")
            is_valid = False
        if len(sasquatch["date_of_sighting"]) < 8:
            flash("You must provide the sighting date", "sasquatch")
            is_valid = False
        if (
            int(sasquatch["number_of_sasquatch"]) < 1
            or int(sasquatch["number_of_sasquatch"]) == ""
        ):
            flash("Number of Sasquatch sightings  must be at least 1.", "sasquatch")
            is_valid = False
        if len(sasquatch["what_happened"]) < 2 or len(sasquatch["what_happened"]) > 50:
            flash(
                "What happened should not have less than 2 characters and greater than 50 characters",
                "sasquatch",
            )
            is_valid = False

        return is_valid

    # One to many to get everything from the sasquatch table and the user table that have a matching id
    @classmethod
    def one_to_many_with_sasquatch_and_user(cls, id):
        # query to join the tables
        query = """
                SELECT * FROM sasquatchs
                JOIN users ON users.id = sasquatchs.user_id 
                WHERE sasquatchs.id = %(id)s;
        """

        data = {"id": id}

        results = connectToMySQL(DB).query_db(query, data)

        if not results:
            print("no user in the database-------->", results)
            return []

        list_sasquatchs = []

        for row_from_db in results:
            user_data = {
                "id": row_from_db["users.id"],
                "first_name": row_from_db["first_name"],
                "last_name": row_from_db["last_name"],
                "email": row_from_db["email"],
                "password": row_from_db["password"],
                "created_at": row_from_db["created_at"],
                "updated_at": row_from_db["updated_at"],
            }

            sasquatch_instances = cls(row_from_db)
            user_instance = user.User(user_data)

            sasquatch_instances.user = user_instance
            list_sasquatchs.append(sasquatch_instances)

        return list_sasquatchs

    # This class method is to update the record by the id
    @classmethod
    def update(cls, data):
        # query the db to update a users sighting information
        query = """
                UPDATE sasquatchs
                SET location = %(location)s, date_of_sighting = %(date_of_sighting)s, number_of_sasquatch = %(number_of_sasquatch)s, what_happened = %(what_happened)s, user_id = %(user_id)s
                WHERE id = %(id)s
        """

        results = connectToMySQL(DB).query_db(query, data)

        return results

    @classmethod
    def delete(cls, id):
        query = """
                DELETE FROM sasquatchs
                WHERE id = %(id)s;
        """

        data = {"id": id}

        results = connectToMySQL(DB).query_db(query, data)

        return results
