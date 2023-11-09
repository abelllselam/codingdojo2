from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

DATABASE = "dojo_survey_schema"


class Dojo:
    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.location = data["location"]
        self.language = data["language"]
        self.comment = data["comment"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    # CRUD

    # Create --- save record to the database:
    @classmethod
    def save(cls, data):
        # query to save the data to the dojos table
        query = """
                INSERT INTO dojos (name, location, language, comment)
                VALUES(%(name)s,%(location)s,%(language)s,%(comment)s);
        """

        results = connectToMySQL(DATABASE).query_db(query, data)

        return results

    # Read
    @classmethod
    def get_all(cls):
        # query to get all
        query = "SELECT * from dojos ORDER BY dojos.id DESC LIMIT 1;"

        results = connectToMySQL(DATABASE).query_db(query)

        # for dict in results:
        #     all_dojos.append(cls(dict))
        # print("all_dojos------->", all_dojos[len(all_dojos) - 1])

        return cls(results[0])

    # Read
    # Get one by id
    # @classmethod
    # def get_one (id):
    @staticmethod
    def validate_dojo(dojo):
        is_valid = True  # we assume this is true
        if len(dojo["name"]) < 3:
            flash("Name must be at least 3 characters.")
            is_valid = False
        if len(dojo["location"]) < 3:
            flash("location must be selected.")
            is_valid = False
        if len(dojo["language"]) < 3:
            flash("language must be selected.")
            is_valid = False
        if len(dojo["comment"]) < 3:
            flash("comment must be at least 3 characters.")
            is_valid = False
        return is_valid
