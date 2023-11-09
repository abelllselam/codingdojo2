from flask_app.config.mysqlconnection import MySQLConnection, connectToMySQL
import re

DATABASE = "users_schema"

EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")

from flask import flash


class User:
    def __init__(self, data):
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.email = data["email"]
        self.password = data["password"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    # create
    @classmethod
    def create(cls, data):
        # inserting a new record into the users table in the DB
        query = """
        INSERT INTO users (first_name, last_name, email, password)
        VALUES(%(first_name)s, %(last_name)s, %(email)s, %(password)s)
        """

        results = connectToMySQL(DATABASE).query_db(query, data)

        return results

    # get_all
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users"

        results = connectToMySQL(DATABASE).query_db(query)

        # this is to see the type of data that is coming from the DB
        print("This is the results output for get_all------------->", results)

        users = []

        for dict in results:
            users.append(dict)

        return users

    # get_one
    @classmethod
    def get_one_by_userid(cls, data):
        # grabbing a user by the user_id

        query = "SELECT * FROM users WHERE id = %(user_id)s"

        results = connectToMySQL(DATABASE).query_db(query, data)

        one_user = cls(results[0])

        return one_user

    # update
    # delete

    @staticmethod
    def registration_is_valid(form_data):
        """Validates the registration form."""

        is_valid = True

        if len(form_data["first_name"].strip()) == 0:
            is_valid = False
            flash("Please enter first name.", "register")
        elif len(form_data["first_name"].strip()) < 2:
            is_valid = False
            flash("First name must be at least two characters.", "register")

        if len(form_data["last_name"].strip()) == 0:
            is_valid = False
            flash("Please enter last name.", "register")
        elif len(form_data["last_name"].strip()) < 2:
            is_valid = False
            flash("Last name must be at least two characters.", "register")

        if len(form_data["email"].strip()) == 0:
            is_valid = False
            flash("Please enter email.", "register")
        elif not EMAIL_REGEX.match(form_data["email"]):
            is_valid = False
            flash("Invalid email.", "register")

        if len(form_data["password"].strip()) == 0:
            is_valid = False
            flash("Please enter password.", "register")
        elif len(form_data["password"].strip()) < 8:
            is_valid = False
            flash("Password must be at least eight characters.", "register")

        elif len(form_data["confirm_password"].strip()) == 0:
            is_valid = False
            flash("Please confirm password.", "register")
        elif form_data["confirm_password"] != form_data["password"]:
            is_valid = False
            flash("Passwords do not match.", "register")

        return is_valid

    @staticmethod
    def login_is_valid(form_data):
        """Validates the login form."""

        is_valid = True

        if len(form_data["email"].strip()) == 0:
            is_valid = False
            flash("Please enter email.", "login")
        elif not EMAIL_REGEX.match(form_data["email"]):
            is_valid = False
            flash("Invalid email.", "login")

        if len(form_data["password"].strip()) == 0:
            is_valid = False
            flash("Please enter password.", "login")
        elif len(form_data["password"].strip()) < 8:
            is_valid = False
            flash("Password must be at least eight characters.", "login")
        return is_valid

    @classmethod
    def get_by_email(cls, email):
        """Finds a user by email address."""

        query = """
        SELECT * FROM users
        WHERE email = %(email)s;
        """

        data = {"email": email}

        results = connectToMySQL(DATABASE).query_db(query, data)

        if len(results) < 1:
            print("Email not found - returning None")
            return None
        else:
            print("Email found - returning user")
            return User(results[0])
