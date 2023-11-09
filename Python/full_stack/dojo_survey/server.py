from flask import Flask, render_template, redirect, request, session
from dojo import Dojo


app = Flask(__name__)
app.secret_key = "djhdsakjhflgkjadsbgkljad"


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/process", methods=["POST"])
def process():
    if not Dojo.validate_survey(request.form):
        # redirect to the route where the burger form is rendered.
        return redirect("/")

    dojos = Dojo.create(request.form)

    session["name"] = request.form["name"]
    session["location"] = request.form["location"]
    session["language"] = request.form["language"]
    session["comment"] = request.form["comment"]
    session["submit"] = request.form["submit"]

    return redirect("/result")


@app.route("/result")
def process_result():
    return render_template(
        "result.html",
        name=session["name"],
        location=session["location"],
        language=session["language"],
        comment=session["comment"],
    )


# @app.route("/render")
# def render_page():
#     one_dojo = session["dojos"]

#     print("printing dojos in the route render-------------->", one_dojo)

#     return render_template("result.html", one_dojo=one_dojo)


@app.route("/clear_session")
def clear():
    session.clear()

    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
