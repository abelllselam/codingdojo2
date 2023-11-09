# Challenge 1: Update the Constructor


class Player:
    def __init__(self, kevin):
        self.name = kevin["name"]
        self.age = kevin["age"]
        self.position = kevin["position"]
        self.team = kevin["team"]


# Challenge 2: Create instances using individual player dictionaries.
kevin = {
    "name": "Kevin Durant",
    "age": 34,
    "position": "small forward",
    "team": "Brooklyn Nets",
}
jason = {
    "name": "Jason Tatum",
    "age": 24,
    "position": "small forward",
    "team": "Boston Celtics",
}
kyrie = {
    "name": "Kyrie Irving",
    "age": 32,
    "position": "Point Guard",
    "team": "Brooklyn Nets",
}

# Create your Player instances here!
# player_jason = ???

player_kevin = Player(kevin)

# Challenge 3: Make a list of Player instances from a list of dictionaries

new_team = []

for dict in kevin:
    new_team.append(kevin[dict])

print(new_team)
