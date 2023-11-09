from flask_app.config.mysqlconnection import connectToMySQL

DATABASE = "dojos_and_ninjas_schema"


class Ninja:
    def __init__(self, data):
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.age = data["age"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.dojo_id = data["dojo_id"]

    # create
    @classmethod
    def create_new(cls, data):
        # create a new Ninja record in the ninja table
        query = """
        INSERT INTO ninjas (first_name, last_name, age, dojo_id)
        VALUES (%(first_name)s,%(last_name)s,%(age)s, %(dojo_id)s)
        """

        results = connectToMySQL(DATABASE).query_db(query, data)
        # checking to make sure results returns an id number
        print("Ninja create expected id number-----------------------> ", results)

        return results

    # get_all

    # get_one
    # update
    # delete
