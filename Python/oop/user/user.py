class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0

    def display_info(self):
        print(self.first_name)
        print(self.last_name)
        print(self.email)
        print(self.age)
        print(self.is_rewards_member)
        print(self.gold_card_points)

        return self

    def enroll(self):
        self.is_rewards_member = True
        print(self.is_rewards_member)
        self.gold_card_points = 200
        print(self.gold_card_points)

        return self

    def spend_points(self, amount):
        self.gold_card_points = self.gold_card_points - amount
        print(self.gold_card_points)

        return self


first = User("Jon", "Doe", "jd@jd.com", 40)
second = User("Jane", "Bee", "jb@jb.com", 45)
third = User("Moon", "Sun", "ms@ms.com", 50)

first.display_info().enroll().spend_points(50)
second.display_info().enroll().spend_points(80)
third.display_info()
