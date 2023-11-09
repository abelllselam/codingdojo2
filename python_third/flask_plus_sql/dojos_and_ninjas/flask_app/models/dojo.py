from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import ninja

# The database name assigned to a variable
DATABASE = "dojos_and_ninjas_schema"


class Dojo:
    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.ninjas = []

    # CRUD

    # create
    # this class method would create new record in the database in the dojos table
    @classmethod
    def save(cls, data):
        # query the data base to Insert into the dojos table

        query = """
                INSERT INTO dojos (name)
                VALUES (%(name)s);
        """

        results = connectToMySQL(DATABASE).query_db(query, data)

        # print("This is the result output in the save classmethod:------->", results)

        return results

    # read
    # This class method would get_all from the database to display on the dashboard
    @classmethod
    def get_all(cls):
        # query the database to select all the dojos
        query = "SELECT * from dojos;"

        results = connectToMySQL(DATABASE).query_db(query)

        # print("This is the result of the get all method query: ------->", results)

        all_dojos = []

        for dojo in results:
            all_dojos.append(cls(dojo))

        # print(
        #     "This is printing all_dojos list to see what was appeneded: ------->",
        #     all_dojos,
        # )

        return all_dojos

    # Read
    # The one to many relationship with join
    @classmethod
    def one_to_many(cls, id):
        # query the join tables with join
        query = """
                SELECT * FROM dojos
                LEFT JOIN ninjas ON dojos.id = ninjas.dojo_id
                WHERE dojos.id = %(id)s
        """

        data = {"id": id}

        results = connectToMySQL(DATABASE).query_db(query, data)

        # if not results:
        #     print(
        #         "-------------------------------------------------------------------------------------------------no results!"
        #     )

        dojo = cls(results[0])
        print(
            "----------------This is the results from the one to many dojo model and it is the first list value: ------->",
            results,
        )

        # print(
        #     "This is the dojo from the one to many dojo model and it is the first list value: ------->",
        #     dojo,
        # )

        for row_from_db in results:
            ninja_data = {
                "id": row_from_db["ninjas.id"],
                "first_name": row_from_db["first_name"],
                "last_name": row_from_db["last_name"],
                "age": row_from_db["age"],
                "dojo_id": row_from_db["dojo_id"],
                "created_at": row_from_db["ninjas.created_at"],
                "updated_at": row_from_db["ninjas.updated_at"],
            }

            # print(
            #     "this is the ninja_data dic i created in the dojos model: --->",
            #     ninja_data,
            # )

            dojo.ninjas.append(ninja.Ninja(ninja_data))

            # print(
            #     "printing the dojo again after appending a whole lot of things:------>",
            #     dojo,
            # )

            print(
                "printing the dojo.ninjas again after appending a whole lot of things:------>",
                dojo.ninjas[0].first_name,
            )

        return dojo
