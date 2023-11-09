from flask import Flask, request, session, render_template, redirect
import random
import datetime

app = Flask(__name__)
app.secret_key = "this is a secret key"


@app.route("/")
def index():
    if "message" not in session:
        session["message"] = []
        session["gold"] = 0
    if "total" not in session:
        session["total"] = 0

    print(
        "THis is the index page session message and session gold and session total printout ------>",
        session["message"],
        session["gold"],
        session["total"],
    )

    return render_template(
        "index.html",
        message=session["message"],
        total=session["total"],
        gold=session["gold"],
    )


@app.route("/process_money", methods=["POST"])
def process_form():
    current_time = datetime.datetime.now()

    if request.form["building"] == "farm":
        session["gold"] = random.randint(10, 20)
        message = f"Earned {session['gold']} from the farm! {current_time}"
    elif request.form["building"] == "cave":
        session["gold"] = random.randint(5, 10)
        message = f"Earned {session['gold']} from the cave! {current_time}"
    elif request.form["building"] == "house":
        session["gold"] = random.randint(2, 5)
        message = f"Earned {session['gold']} from the house! {current_time}"
    elif request.form["building"] == "casino":
        session["gold"] = random.randint(-50, 50)
        if session["gold"] < 0:
            message = f"Entered a casino and lost {session['gold']} golds ....ouch {current_time}"
        else:
            message = f"Earned gold and won {session['gold']} golds {current_time}"

    session["message"].append(message)
    session["total"] = session["total"] + session["gold"]

    print(
        "This is the process route, which is printing the session message ---->",
        session["message"],
    )

    return redirect("/")


@app.route("/reset")
def reset():
    session.clear()
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
