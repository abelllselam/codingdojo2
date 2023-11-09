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


account1 = BankAccount()
account2 = BankAccount()

account1.deposit(100).deposit(100).deposit(200).withdraw(50).yield_interest(
    0.02
).display_account_info()

account2.deposit(50).deposit(50).withdraw(10).withdraw(10).withdraw(10).withdraw(
    20
).yield_interest(0.01).display_account_info()
