from flask_app import app
from flask import Flask, render_template, redirect, request, flash, session
from flask_app.controllers import users
from flask_app.models.art import Art
from flask_app.models.user import User


# render the creation html to display the art details
@app.route("/creation/<int:id>")
def display_and_buy(id):
    one_art = Art.read_by_id(id)
    one_user = Art.one_to_many_all_art_with_user(id)

    print(one_user, "_------------oneuser being printed")

    print("This is the one art print to see if it prints the user_id: ------>", one_art)
    # one_to_many = User.one_to_many(id)

    return render_template("creations.html", one_art=one_art, one_user=one_user)


# the form data from the new art
@app.route("/process/art", methods=["post"])
def create():
    print("This is the request.form print", request.form)

    # data = {
    #     "title": request.form["title"],
    #     "description": request.form["description"],
    #     "price": request.form["price"],
    #     "quantity": request.form["quantity"],
    # }

    if not User.Validate_art(request.form):
        return redirect("/creation/new")

    art_id = Art.save(request.form)

    print("This is art_id in the arts controller:----->", art_id)

    return redirect("/creation/new")


# displaying the information of the art that was selected to be updated
@app.route("/creations/<int:id>/edit")
def update_art(id):
    art_info = Art.read_by_id(id)

    session["art_id"] = id

    print(
        "This is the update controller printing read by id info:------>",
        id,
    )
    return render_template("update.html", art_info=art_info)


# This is the form data that is going to be updated in the post route
@app.route("/update/art", methods=["POST"])
def edit():
    # print(
    #     "print the request.form in the arts controller for the update: ------>",
    #     request.form,
    # )
    Art.update_art(request.form)

    if not User.Validate_art(request.form):
        return redirect(f"/creations/{session['art_id']}/edit")

    return redirect("/users/dashboard")


# The route to delete art from the DB using id
@app.route("/delete/<int:id>")
def delete(id):
    Art.delete_art(id)

    return redirect("/users/dashboard")
