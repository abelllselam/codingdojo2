from flask import Flask, render_template, redirect, session, request

import random


app = Flask(__name__)
app.secret_key = "dsjakdsjfgj"


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/process_money", methods=["POST"])
def process():
    return redirect(
        "/",
    )


@app.route("/reset", methods=["POST"])
def reset():
    session.clear()
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
