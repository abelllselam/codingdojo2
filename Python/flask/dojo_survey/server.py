from flask import Flask, render_template, redirect, request, session

app = Flask(__name__)
app.secret_key = "djhdsakjhflgkjadsbgkljad"


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/process", methods=["POST"])
def process():
    print(request.form)
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


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
