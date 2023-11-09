from flask import Flask, render_template, redirect, request, session
from flask_app.models import dojo, ninja
from flask_app import app


@app.route("/dojos")
def index():
    dojos = dojo.Dojo.get_all()
    return render_template("dojo.html", dojos=dojos)


@app.post("/dojos/create")
def create():
    print("Form Data ---------------------------------> ", request.form)
    dojos = dojo.Dojo.create(request.form)

    return redirect("/dojos")


@app.route("/show/<int:id>")
def Show_all(id):
    data = {"id": id}
    # get data of dojo and ninjas associated with it. one to many!
    dojos_info = dojo.Dojo.dojos_and_ninjas(data)
    return render_template("show.html", dojos_info=dojos_info)
