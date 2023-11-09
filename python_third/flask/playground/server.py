from flask import Flask, render_template, redirect

app = Flask(__name__)


@app.route("/")
def dashboard():
    return redirect("/play")


@app.route("/play")
def level_1():
    return render_template("index.html")


@app.route("/play/<int:num>")
def level_2(num):
    return render_template("level_2.html", num=num)


@app.route("/play/<int:num>/<color>")
def level_3(num, color):
    return render_template("level_3.html", num=num, color=color)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
