from flask_app import app

from flask import Flask, redirect, render_template, request, session, flash

from flask_app.models.user import User

from flask_app import bcrypt


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/process")
def create():
    # call the class User and the method create from the models by instantiating the class

    users = User.create(request.form)

    return redirect("/dashboard")


@app.route("/dashboard")
def dashboard():
    if "user_id" not in session:
        return redirect("/")

    hello = User.get_one_by_userid({"user_id": session["user_id"]})

    return render_template("dashboard.html", hello=hello)


@app.post("/register")
def register_user():
    """Processes the registration form."""

    if not User.registration_is_valid(request.form):
        return redirect("/")

    potential_user = User.get_by_email(request.form["email"])

    if potential_user:
        flash("Email in use. Please log in.")
        return redirect("/")
    else:
        print("User not found, okay to register.")

    hashed_pw = bcrypt.generate_password_hash(request.form["password"])
    print("hashed password:", hashed_pw)

    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"],
        "password": hashed_pw,
    }

    user_id = User.create(data)
    session["user_id"] = user_id
    flash("Thanks for registering.")

    return redirect("/dashboard")


@app.post("/login")
def login():
    """Processes the login form."""
    if not User.login_is_valid(request.form):
        return redirect("/")

    potential_user = User.get_by_email(request.form["email"])

    if not potential_user:
        flash("Invalid credentials.", "login")
        return redirect("/")

    user = potential_user

    if not bcrypt.check_password_hash(user.password, request.form["password"]):
        flash("Invalid credentials.", "login")
        return redirect("/")

    session["user_id"] = user.id
    flash("Thanks for logging in.")

    return redirect("/dashboard")


@app.route("/get_all")
def get_all():
    users = User.get_all()

    return render_template("dashboard.html", users=users)


@app.route("/clear_session")
def clear():
    # clear session
    session.clear()

    return redirect("/")
