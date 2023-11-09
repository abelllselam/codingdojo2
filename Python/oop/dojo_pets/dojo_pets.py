class Pet:
    # implement __init__( name , type , tricks ):
    def __init__(self, name, type, tricks, noise):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = 100
        self.energy = 50
        self.noise = noise

    def sleep(self):
        self.energy += 25
        # print(self.energy)

        return self

    def eat(self):
        self.energy += 5
        self.health += 10

        return self

    def play(self):
        self.health += 5

        return self

    def noise(self):
        self.noise

        return self


class Ninja:
    def __init__(self, first_name, last_name, treats, pet_food, pet):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet = pet

    def walk(self):
        self.pet.play()

        return self

    def feed(self):
        self.pet.eat()

        return self

    def bathe(self):
        self.pet.noise()

        return self


dog = Pet("bob", "dog", "play dead", "growls")
cat = Ninja("john", "doe", "good treats", "The best pet food", dog)

# dog.eat()

# cat.feed()
# dog.sleep()
# dog.noise()

cat.bathe()
cat.walk()
