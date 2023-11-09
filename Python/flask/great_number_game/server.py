from flask import Flask, redirect, render_template, request, session
import random

app = Flask(__name__)
app.secret_key = "djhjfablkdjgfbakdjbgkadbk"


@app.route("/")
def index():
    # random.randint(1, 100)
    # session.clear()

    if "num" not in session:
        session["num"] = random.randint(1, 100)
    return render_template("index.html")


@app.route("/compare", methods=["POST"])
def compare():
    session["compare"] = int(request.form["compare"])
    return redirect("/")


@app.route("/reset")
def reset():
    session.clear()
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
