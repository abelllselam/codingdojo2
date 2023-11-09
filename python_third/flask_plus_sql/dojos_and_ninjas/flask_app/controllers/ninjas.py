from flask_app import app
from flask import Flask, render_template, redirect, request
from flask_app.models import ninja
from flask_app.models import dojo
from flask_app.controllers import dojos


@app.route("/ninjas")
def new_ninja():
    all_dojos = dojo.Dojo.get_all()

    return render_template("new_ninja.html", all_dojos=all_dojos)


@app.route("/ninjas/new", methods=["POST"])
def save():
    print(
        "This is the request.form from the ninjas controller save route: -------> ",
        request.form,
    )

    dojo_id = request.form["dojo_id"]

    print("-----This is the save route ninjas dojo_id print:----->", dojo_id)

    ninja.Ninja.create(request.form)
    return redirect(f"/dojos/{dojo_id}")
