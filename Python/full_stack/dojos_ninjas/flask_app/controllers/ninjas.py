from flask import Flask, render_template, redirect, session, request
from flask_app import app
from flask_app.models import ninja
from flask_app.models import dojo
from flask_app.controllers import dojos


# come to this route from the link on the home page to complete the new ninja creation form
@app.route("/ninjas/new")
def add_new_ninja():
    dojos = dojo.Dojo.get_all()
    return render_template("ninja.html", dojos=dojos)


# create new ninja record in the ninjas table
@app.post("/ninjas/process")
def create_ninja():
    ninjas = ninja.Ninja.create_new(request.form)

    dojo_id = request.form["dojo_id"]

    return redirect(f"/show/{dojo_id}")
