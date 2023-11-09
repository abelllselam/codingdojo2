class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate=0, balance=0):
        # your code here! (remember, instance attributes go here)
        self.int_rate = int_rate
        self.balance = balance
        # don't worry about user info here; we'll involve the User class soon

    def deposit(self, amount):
        # your code here
        self.balance = self.balance + amount

        return self

    def withdraw(self, amount):
        # your code here
        if self.balance < amount:
            print("insufficient funds: Charging a $5 fee")
            self.balance = self.balance - 5
        else:
            self.balance = self.balance - amount

        return self

    def display_account_info(self):
        # your code here
        print(f"Balance: {self.balance}")

        return self

    def yield_interest(self, int_rate):
        # your code here
        if self.balance > 0:
            self.balance = (self.balance * int_rate) + self.balance

        return self


class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)

    # other methods

    def make_deposit(self, amount):
        # Add a make_deposit method to the User class that calls on its bank account's instance methods.
        self.account.balance += amount

        return self

    def make_withdrawal(self, amount):
        # Add a make_withdrawal method to the User class that calls on its bank account's instance methods.
        self.account.balance = self.account.balance - amount

        print(self.account.balance)

        return self

    def display_user_balance(self):
        print(self.account.balance)

        return self


user1 = User("John", "jj@email.com")

user1.make_deposit(50)
user1.display_user_balance()
