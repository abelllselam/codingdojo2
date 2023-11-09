from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash


import re

EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")

DB = "py_belt_exam_2"


class User:
    def __init__(self, data) -> None:
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.email = data["email"]
        self.password = data["password"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    # CRUD
    # Create a new user:
    @classmethod
    def save(cls, data):
        # query to save new record into the database:
        query = """
                INSERT INTO users (first_name, last_name, email, password)
                VALUES (%(first_name)s,%(last_name)s,%(email)s,%(password)s);
        """

        results = connectToMySQL(DB).query_db(query, data)

        return results

    @staticmethod
    def validate_user(user):
        is_valid = True  # we assume this is true

        # test whether a field matches the pattern

        if len(user["first_name"]) < 2:
            flash("First name must be at least 3 characters.", "register")
            is_valid = False
        if len(user["last_name"]) < 2:
            flash("Last Name must be at least 3 characters.", "register")
            is_valid = False
        if not EMAIL_REGEX.match(user["email"]):
            flash("Invalid email address!", "register")
            is_valid = False
        if len(user["password"]) < 8:
            flash("Password must be at least 8 characters.", "register")
            is_valid = False
        elif user["confirm_password"] != user["password"]:
            is_valid = False
            flash("Passwords do not match.", "register")
        return is_valid

    @staticmethod
    def login_is_valid(form_data):
        """Validates the login form."""

        is_valid = True

        if not EMAIL_REGEX.match(form_data["email"]):
            is_valid = False
            flash("Invalid email.", "login")

        if len(form_data["password"]) < 8:
            is_valid = False
            flash("Password must be at least 8 characters.", "login")
        return is_valid

    @classmethod
    def get_by_email(cls, email):
        """Finds a user by email address."""

        query = """
        SELECT * FROM users
        WHERE email = %(email)s;
        """

        data = {"email": email}

        results = connectToMySQL(DB).query_db(query, data)

        if len(results) < 1:
            print("Email not found - returning None")
            return None
        else:
            print("Email found - returning user")
            return User(results[0])
