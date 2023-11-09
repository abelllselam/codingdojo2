from flask_app.config.mysqlconnection import connectToMySQL

DATABASE = "dojos_and_ninjas_schema"


class Ninja:
    def __init__(self, data):
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.age = data["age"]
        self.dojo_id = data["dojo_id"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    # CRUD

    # Create
    # The class method creates a new ninja in the database
    @classmethod
    def create(cls, data):
        # query to save the new ninja into the database

        query = """
                INSERT INTO ninjas (first_name, last_name, age, dojo_id)
                VALUES(%(first_name)s,%(last_name)s,%(age)s,%(dojo_id)s);
        """

        results = connectToMySQL(DATABASE).query_db(query, data)

        print("This is the ninja model create method results printout:----->", results)

        return results
