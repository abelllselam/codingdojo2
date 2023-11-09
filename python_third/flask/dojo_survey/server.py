from flask import Flask, request, redirect, render_template, session

app = Flask(__name__)
app.secret_key = "jsdjghalkjgdhlkja"


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/process", methods=["POST"])
def process_form():
    # print("This is the process route request.form print out", request.form)

    session["name"] = request.form["name"]
    session["location"] = request.form["location"]
    session["fav_lan"] = request.form["fav_lan"]
    session["comment"] = request.form["comment"]

    # print("This is the session print from the process route", session["name"])

    return redirect("/result")


@app.route("/result")
def form_summary():
    name = session["name"]
    dojo_location = session["location"]
    dojo_lan = session["fav_lan"]
    dojo_comment = session["comment"]

    print("This is from the result route to check the session result", dojo_location)
    return render_template(
        "result.html",
        name=name,
        dojo_location=dojo_location,
        dojo_lan=dojo_lan,
        dojo_comment=dojo_comment,
    )


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
