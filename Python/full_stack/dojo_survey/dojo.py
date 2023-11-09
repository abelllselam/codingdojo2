from mysqlconnection import connectToMySQL
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

    # create
    @classmethod
    def create(cls, data):
        # creating a new record in the dojo table
        query = """
        INSERT INTO dojos (name, location, language, comment)
        VALUES(%(name)s, %(location)s, %(language)s,%(comment)s)
        """
        results = connectToMySQL(DATABASE).query_db(query, data)

        # checking to see what the output of the results query, expecting an id
        print("**************************", results)

        return results

    @staticmethod
    def validate_survey(survey):
        is_valid = True
        if len(survey["name"]) < 3:
            is_valid = False
            flash("Name must be at least 3 characters.")
        if len(survey["location"]) < 1:
            is_valid = False
            flash("Must choose a dojo location.")
        if len(survey["language"]) < 1:
            is_valid = False
            flash("Must choose a favorite language.")
        if len(survey["comment"]) < 3:
            is_valid = False
            flash("Comments must be at least 3 characters.")
        return is_valid


# get_all
# get_one
# update
# delete
