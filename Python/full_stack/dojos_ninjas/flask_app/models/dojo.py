from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import ninja

DATABASE = "dojos_and_ninjas_schema"


class Dojo:
    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.many_ninjas = []

    # create
    @classmethod
    def create(cls, data):
        print("Data in Create Method --------------------------> ", data)
        # insert new record into the dojos table
        query = """
        INSERT INTO dojos (name)
        VALUES (%(name)s)
        """

        results = connectToMySQL(DATABASE).query_db(query, data)

        print("*************", results, "****************")

        return results

    # get_all
    @classmethod
    def get_all(cls):
        # get all the dojo records from the dojo table
        query = """
        SELECT * FROM dojos;
        """

        results = connectToMySQL(DATABASE).query_db(query)

        print("get_all method query output ---------------->", results)

        dojos = []

        for dict in results:
            dojos.append(cls(dict))

        return dojos

    # Left JOIN to associate records of dojos and ninjas
    @classmethod
    def dojos_and_ninjas(cls, data):
        # Left Join everything from teh dojos table and the ninjas table
        query = """
        SELECT * FROM dojos
        LEFT JOIN ninjas 
        ON dojos.id = ninjas.dojo_id
        WHERE dojos.id = %(id)s;
        """

        results = connectToMySQL(DATABASE).query_db(query, data)

        # checking for the value of the results query
        print("The value of the Left join------------->", results)

        # making object of the one dojo
        one_dojo = cls(results[0])

        # going through result and making an object of every ninja
        for dict in results:
            ninja_data = {
                "id": dict["ninjas.id"],
                "first_name": dict["first_name"],
                "last_name": dict["last_name"],
                "age": dict["age"],
                "created_at": dict["ninjas.created_at"],
                "updated_at": dict["ninjas.updated_at"],
                "dojo_id": dict["dojo_id"],
            }
            ninja_object = ninja.Ninja(ninja_data)
            one_dojo.many_ninjas.append(ninja_object)
        print("One Dojo Info ---------> ", one_dojo.name)
        print("One Dojo Info ---------> ", one_dojo.many_ninjas[0].first_name)
        return one_dojo


# get_one
# update
# delete
