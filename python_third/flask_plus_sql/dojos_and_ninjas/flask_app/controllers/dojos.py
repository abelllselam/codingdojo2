from flask_app import app
from flask import Flask, render_template, redirect, request
from flask_app.models import dojo


@app.route("/")
def index():
    return redirect("/dojos")


@app.route("/dojos")
def dashboard():
    all_dojos = dojo.Dojo.get_all()

    # print("This is the all_dojos controller output:------>", all_dojos)

    return render_template("dashboard.html", all_dojos=all_dojos)


@app.route("/dojos/create", methods=["POST"])
def create():
    one_dojo = dojo.Dojo.save(request.form)
    return redirect("/")


@app.route("/dojos/<int:id>")
def one_many(id):
    # print(
    #     "------------------------------printing the id that is coming in from the html in the dojos controller: ----->",
    #     id,
    # )
    dojos_ninjas = dojo.Dojo.one_to_many(id)

    print(
        "This is the controller side printing the results of the one_to_many in the controller ------>",
        dojos_ninjas.name,
        dojos_ninjas.id,
    )
    return render_template("dojo_show.html", dojos_ninjas=dojos_ninjas)
