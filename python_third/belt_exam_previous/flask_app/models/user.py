from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.art import Art
from flask import flash

import re

EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")

DB = "py_belt_exam"


class User:
    def __init__(self, data) -> None:
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.email = data["email"]
        self.password = data["password"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.arts = []

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

    @staticmethod
    def Validate_art(art):
        is_valid = True  # we assume this is true

        # test whether a field matches the pattern

        if len(art["title"]) < 2:
            flash("Title must be at least 3 characters.", "art")
            is_valid = False
        if len(art["description"]) < 10:
            flash("Description must be at least 10 characters.", "art")
            is_valid = False

        # print("This is the value of price:------->", art["price"])
        # if art["price"] == "":
        #     flash("Price must be greater than 0.", "art")
        #     # art["price"] = 0.0
        #     is_valid = False
        if float(art["price"]) < 0:
            flash("Price must be greater than 0.", "art")
            is_valid = False
        # if art["quantity"] == "":
        #     flash("Quantity must be greater than 0.", "art")
        #     return False
        if int(art["quantity"]) < 0:
            flash("Quantity must be greater than 0.", "art")
            is_valid = False

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

    @classmethod
    def get_all(cls):
        query = "SELECT * from arts;"

        results = connectToMySQL(DB).query_db(query)

        # all_users = []

        # for dict in results:
        #     all_users.append(cls(dict))

        return results

    # GETS ALL USERS AND ALL THEIR PAINTINGS
    @classmethod
    def all_users_with_all_paints(cls):
        query = """
                SELECT * FROM users
                LEFT JOIN arts ON users.id = arts.user_id;
        """
        results = connectToMySQL(DB).query_db(query)

        list_users = []

        for row_from_db in results:
            art_data = {
                "id": row_from_db["arts.id"],
                "title": row_from_db["title"],
                "description": row_from_db["description"],
                "price": row_from_db["price"],
                "quantity": row_from_db["quantity"],
                "created_at": row_from_db["arts.created_at"],
                "updated_at": row_from_db["arts.updated_at"],
                "user_id": row_from_db["user_id"],
            }

            user_instance = cls(row_from_db)
            art_instance = Art(art_data)

            user_instance.art = art_instance
            list_users.append(user_instance)

        return list_users

    # GETS ONE USERS AND ALL THEIR PAINTINGS
    @classmethod
    def one_to_many(cls, id):
        # query to join the tables
        query = """
                SELECT * FROM users
                LEFT JOIN arts ON users.id = arts.user_id 
                WHERE users.id = %(id)s;
        """

        data = {"id": id}

        results = connectToMySQL(DB).query_db(query, data)

        if not results:
            print("no user in the database-------->", results)
            return []

        print("This is the user from onetomany ----->", results)
        # DOING THIS BEACUSE WE ARE DEALING WITH JUST ONE USER
        user = cls(results[0])

        for row_from_db in results:
            art_data = {
                "id": row_from_db["arts.id"],
                "title": row_from_db["title"],
                "description": row_from_db["description"],
                "price": row_from_db["price"],
                "quantity": row_from_db["quantity"],
                "created_at": row_from_db["arts.created_at"],
                "updated_at": row_from_db["arts.updated_at"],
                "user_id": row_from_db["user_id"],
            }

            user.arts.append(Art(art_data))

        return user
