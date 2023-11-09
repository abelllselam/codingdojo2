players = [
    {
        "name": "Kevin Durant",
        "age": 34,
        "position": "small forward",
        "team": "Brooklyn Nets",
    },
    {
        "name": "Jason Tatum",
        "age": 24,
        "position": "small forward",
        "team": "Boston Celtics",
    },
    {
        "name": "Kyrie Irving",
        "age": 32,
        "position": "Point Guard",
        "team": "Brooklyn Nets",
    },
    {
        "name": "Damian Lillard",
        "age": 33,
        "position": "Point Guard",
        "team": "Portland Trailblazers",
    },
    {
        "name": "Joel Embiid",
        "age": 32,
        "position": "Power Foward",
        "team": "Philidelphia 76ers",
    },
    {
        "name": "DeMar DeRozan",
        "age": 32,
        "position": "Shooting Guard",
        "team": "Chicago Bulls",
    },
]


# # Challenge 1:Update the Constructor:
# class Player:
#     def __init__(self, players):
#         self.name = players['name']
#         self.age = players['age']
#         self.position = players['position']
#         self.team = players['team']


# Challenge 2: Create instances using individual player dictionaries.

# kevin = {
#     "name": "Kevin Durant",
#     "age": 34,
#     "position": "small forward",
#     "team": "Brooklyn Nets",
# }
# jason = {
#     "name": "Jason Tatum",
#     "age": 24,
#     "position": "small forward",
#     "team": "Boston Celtics",
# }
# kyrie = {
#     "name": "Kyrie Irving",
#     "age": 32,
#     "position": "Point Guard",
#     "team": "Brooklyn Nets",
# }


# class Player:
#     def __init__(self, name, age, position, team):
#         self.name = name
#         self.age = age
#         self.position = position
#         self.team = team


# # Create your Player instances here!
# print_jason = player_jason = Player(
#     jason["name"], jason["age"], jason["position"], jason["team"]
# )

# print_kevin = player_kevin = Player(
#     kevin["name"], kevin["age"], kevin["position"], kevin["team"]
# )

# print_kyrie = player_kyrie = Player(
#     kyrie["name"], kyrie["age"], kyrie["position"], kyrie["team"]
# )


# Challenge 3: Make a list of Player instances from a list of dictionaries
new_team = []

for player in players:
    new_team.append(player)

print(new_team)
