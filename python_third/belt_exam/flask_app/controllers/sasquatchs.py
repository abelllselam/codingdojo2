from flask_app.models import sasquatch
from flask_app.models import user
from flask_app.controllers import users
from flask import Flask, render_template, redirect, request, session, flash
from flask_app import app


@app.route("/sightings/new")
def new_sighting():
    # print(
    #     session["user_id"],
    #     "------------------> This is the session user id in the sasquatch controller",
    # )

    id = session["user_id"]

    one_user = user.User.one_to_many(id)

    return render_template("new.html", one_user=one_user)


@app.route("/process/new", methods=["POST"])
def create():
    # print(
    #     request.form,
    #     "<-------------------pritning the request.form in the sasquatchs controller",
    # )

    if not sasquatch.Sasquatch.Validate_sasquatch(request.form):
        return redirect("/sightings/new")

    sasquatch.Sasquatch.save(request.form)

    return redirect("/users/dashboard")


@app.route("/sightings/<int:id>")
def sasquatch_details(id):
    print(id, "------------------> This is the sasquatch id")

    all_sasquatch_user = sasquatch.Sasquatch.one_to_many_with_sasquatch_and_user(id)
    one_user = user.User.one_to_many(session["user_id"])

    return render_template(
        "details.html", all_sasquatch_user=all_sasquatch_user, one_user=one_user
    )


@app.route("/sightings/<int:id>/edit")
def sasquatch_edit(id):
    session["sasquatch_id"] = id

    all_sasquatch_user = sasquatch.Sasquatch.one_to_many_with_sasquatch_and_user(id)
    one_user = user.User.one_to_many(session["user_id"])

    return render_template(
        "update.html", all_sasquatch_user=all_sasquatch_user, one_user=one_user
    )


# This route updates the selected occurrence in the DB sasquatchs table
@app.route("/sightings/edit", methods=["POST"])
def update_form_data():
    sasquatch.Sasquatch.update(request.form)

    # print(request.form, "-------------> request.form from teh sasquatch controllers")
    if not sasquatch.Sasquatch.Validate_sasquatch(request.form):
        return redirect(f"/sightings/{session['sasquatch_id']}/edit")

    return redirect(f"/sightings/{session['sasquatch_id']}")


# The delete route where the record is deleted from the sasquatchs table in the DB
@app.route("/delete/<int:id>")
def delete_record(id):
    print(id, "-------------> this is the id in delete route")
    sasquatch.Sasquatch.delete(id)
    return redirect("/users/dashboard")
