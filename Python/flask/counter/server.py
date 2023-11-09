from flask import Flask, render_template, redirect, request, session

app = Flask(__name__)
app.secret_key = "dasg;pkfagn'lkafng;klafg;klk"


@app.route("/")
def index():
    if "number" not in session:
        session["number"] = 0
    session["number"] += 1

    return render_template("index.html", number=session["number"])


@app.route("/click")
def click():
    # print(request.form)
    session["number"] += 1
    return redirect("/")


@app.route("/reset")
def reset():
    session.clear()

    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
