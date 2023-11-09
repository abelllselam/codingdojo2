class Pet:
    def __init__(self, name, type, tricks, health, energy):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = health
        self.energy = energy

    def sleep(self):
        self.energy += 25

        return self

    def eat(self):
        self.energy += 5
        self.health += 10

        return self

    def play(self):
        self.health += 5

        return self

    def noise(self):
        print("The pet sound")

        return self


class Ninja:
    def __init__(
        self,
        first_name,
        last_name,
        pet=Pet("dog", "small", "play dead", 100, 100),
        treats="nice food",
        pet_food="the best pet food",
    ):
        self.first_name = first_name
        self.last_name = last_name
        self.pet = pet
        self.treats = treats
        self.pet_food = pet_food

    def walk(self):
        self.pet.play()

        return self

    def feed(self):
        self.pet.eat()

        return self

    def bathe(self):
        self.pet.noise()

        return self


# ninja_pet = Pet("dog", "small", "play dead", 100, 100) it works like this too! instead of calling the class in the constructor of the Ninja class

ninja = Ninja("john", "Doe")

print(ninja.feed())
