from flask import Flask, session, redirect, render_template, request
import random

app = Flask(__name__)
app.secret_key = "dsajohdsjaglkdsaj"


@app.route("/")
def index():
    if "num" not in session:
        session["num"] = random.randint(1, 100)
        session["guess"] = None  # initializing guess

    # print("This is the index route session guess print", session["guess"])

    num = session["num"]
    guess = session["guess"]
    message = ""

    if guess is not None:
        if int(guess) < num:
            message = "Too low!"
        elif int(guess) > num:
            message = "Too high!"
        else:
            message = "You did it!"
    return render_template("index.html", num=num, guess=guess, message=message)


@app.route("/process", methods=["POST"])
def process_form():
    # print(request.form)
    session["guess"] = request.form["guess"]
    # print("This is the process route session print", session["guess"])

    return redirect("/")


@app.route("/reset")
def clear_session():
    session.clear()
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
