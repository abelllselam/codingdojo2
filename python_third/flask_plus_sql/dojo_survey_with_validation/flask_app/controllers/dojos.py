from flask_app import app
from flask import Flask, redirect, render_template, session, request, flash
from flask_app.models import dojo


@app.route("/")
def index():
    # all_dojos = dojo.Dojo.get_all()

    return render_template("index.html")


@app.route("/dojos/process", methods=["POST"])
def form_data():
    if not dojo.Dojo.validate_dojo(request.form):
        # redirect to the route where the burger form is rendered.
        return redirect("/")

    dojo.Dojo.save(request.form)

    return redirect("/dojos/show")


@app.route("/dojos/show")
def show_result():
    dojos = dojo.Dojo.get_all()
    # last_dojo = dojos[len(dojos) - 1]

    return render_template("result.html", dojos=dojos)
