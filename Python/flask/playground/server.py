from flask import Flask, render_template

app = Flask(__name__)


@app.route("/play")
def play():
    return render_template("play.html")


@app.route("/play/<int:num>")
def play_with_num(num):
    return render_template("play_with_num.html", num=num)


@app.route("/play/<int:num>/<color>")
def play_with_num_and_color(num, color):
    return render_template("play_with_num_and_color.html", num=num, color=color)


if __name__ == "__main__":
    app.run(debug=True)
