from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")

DATABASE = "email_schema"


class Email:
    def __init__(self, data):
        self.id = data["id"]
        self.email = data["email"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    # created
    @classmethod
    def create(cls, data):
        # insert a record into the emails table
        query = """
        INSERT INTO emails (email)
        VALUES (%(email)s)
        """

        results = connectToMySQL(DATABASE).query_db(query, data)

        return results

    # get_all
    @classmethod
    def get_all(cls):
        # select all from the emails table
        query = "SELECT * from emails"

        results = connectToMySQL(DATABASE).query_db(query)

        all_emails = []

        for dict in results:
            all_emails.append(dict)

        return all_emails

    @staticmethod
    def validate_user(email):
        is_valid = True
        query = "SELECT * FROM emails WHERE email = %(email)s;"
        results = connectToMySQL(DATABASE).query_db(query, email)
        if len(results) >= 1:
            flash("Email already taken.")
            is_valid = False
        if not EMAIL_REGEX.match(email["email"]):
            flash("Invalid Email!!!")
            is_valid = False
        return is_valid

    # get_one
    # update
    # delete
