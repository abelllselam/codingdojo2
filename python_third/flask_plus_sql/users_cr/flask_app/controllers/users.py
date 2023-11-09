from flask_app import app
from flask import Flask, render_template, redirect, request
from flask_app.models.user import User


@app.route("/")
def index():
    return redirect("/users")


# the dashboard where all the users are displayed
@app.route("/users")
def dashboard():
    users = User.get_all()
    return render_template("read_all.html", users=users)


# Where the form data is processed
@app.route("/users/create", methods=["POST"])
def new_user():
    # print(
    #     "This is the request.form in the users/create route: --------->", request.form
    # )
    one_user = User.save(request.form)

    return redirect("/")


# The new user input is collected and the html is displayed
@app.route("/users/create/new")
def create():
    return render_template("create.html")


# displays one user
@app.route("/users/<int:id>")
def display_one(id):
    # print(
    #     "This is the id that is coming from the read all method when the show button/link is selected: -------->",
    #     id,
    # )

    # data = {"id": id}

    one_user = User.get_one(id)

    # print(
    #     "This is the display_one route print the one_user result after the query is run: -------->",
    #     one_user,
    # )
    return render_template("read_one.html", one_user=one_user)


# show the one user on the edit page
# This is the update route with no return
@app.route("/users/<int:id>/edit")
def edit(id):
    # print("This is the update route testing the id result: ----->", id)

    one_user = User.get_one(id)

    # print(
    #     "This is the one_user variable testing the edit route: ------>",
    #     one_user,
    # )

    return render_template("edit.html", one_user=one_user)


# Update the user and redirect to the show page
@app.route("/users/<int:id>/update", methods=["POST"])
def update(id):
    print("printing the id value in the update route: ----->", id)
    User.update(request.form)

    print(
        "The update route what the return is for the update model: -------->",
        request.form,
    )

    return redirect(f"/users/{id}")


# Delete route and no return
@app.route("/delete/<int:id>")
def delete(id):
    User.delete(id)
    return redirect("/")
