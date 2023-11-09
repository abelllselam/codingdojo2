# # 1.Update Values in Dictionaries and Lists

# x = [[5, 2, 3], [10, 8, 9]]
# students = [
#     {"first_name": "Michael", "last_name": "Jordan"},
#     {"first_name": "John", "last_name": "Rosales"},
# ]
# sports_directory = {
#     "basketball": ["Kobe", "Jordan", "James", "Curry"],
#     "soccer": ["Messi", "Ronaldo", "Rooney"],
# }
# z = [{"x": 10, "y": 20}]

# # Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
# x[1][0] = 15
# print(x)

# # Change the last_name of the first student from 'Jordan' to 'Bryant'
# students[0]["last_name"] = "Bryant"
# print(students)

# # In the sports_directory, change 'Messi' to 'Andres'
# sports_directory["soccer"][0] = "Andres"
# print(sports_directory)

# # Change the value 20 in z to 30
# z[0]["y"] = 30
# print(z)

print(" ******************end question 1*********************************")

# # 2.Iterate Through a List of Dictionaries
# students = [
#     {"first_name": "Michael", "last_name": "Jordan"},
#     {"first_name": "John", "last_name": "Rosales"},
#     {"first_name": "Mark", "last_name": "Guillen"},
#     {"first_name": "KB", "last_name": "Tonel"},
# ]


# def iterateDictionary(some_list):
#     for x in range(len(students)):
#         print(
#             f"first_name - {some_list[x]['first_name']} , last_name - {some_list[x]['last_name']}"
#         )


# iterateDictionary(students)

print(" ******************end question 2*********************************")


# # 3.Get Values From a List of Dictionaries
# def iterateDictionary2(key_name, some_list):
#     for x in range(len(some_list)):
#         print(f"{some_list[x][key_name]}")


# print("first names")
# iterateDictionary2(
#     "first_name",
#     students,
# )
# print("")
# print("last names")
# iterateDictionary2("last_name", students)

print(" ******************end question 3*********************************")

# 4.Iterate Through a Dictionary with List Values
dojo = {
    "locations": ["San Jose", "Seattle", "Dallas", "Chicago", "Tulsa", "DC", "Burbank"],
    "instructors": [
        "Michael",
        "Amy",
        "Eduardo",
        "Josh",
        "Graham",
        "Patrick",
        "Minh",
        "Devon",
    ],
}


def printInfo(some_dict):
    # print(some_dict["locations"])

    for x in some_dict:
        print("---------------------- ")
        print(f"{len(some_dict[x])} {x}")

        for y in range(len(some_dict[x])):
            print(f"{some_dict[x][y]}")


printInfo(dojo)
