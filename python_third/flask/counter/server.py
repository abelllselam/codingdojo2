from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)

app.secret_key = "hello secret key"


@app.route("/")
def index():
    if "counter" not in session:
        session["counter"] = 0
    session["counter"] += 1
    # else:
    #     # counter = 0
    #     # counter = session["counter"]
    #     print("key 'key_name' does NOT exist")

    return render_template("index.html", counter=session["counter"])


@app.route("/counter_by_2")
def counter_by_2():
    session["counter"] += 1

    return redirect("/")


@app.route("/reset")
def reset_page():
    session.clear()

    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
