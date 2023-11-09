from flask_app import app
from flask import render_template, redirect, request, flash, session
from flask_app import bcrypt
from flask_app.models.user import User


@app.route("/")
def log_reg():
    return render_template("login.html")


@app.route("/register")
def reg_page():
    return render_template("register.html")


@app.route("/users/registration", methods=["POST"])
def reg_process():
    if not User.validate_user(request.form):
        # redirect to the route where the user form is rendered.
        return redirect("/register")

    potential_user = User.get_by_email(request.form["email"])

    if potential_user:
        flash("Invalid Email.")
        return redirect("/")

    pw_hash = bcrypt.generate_password_hash(request.form["password"])
    # print(pw_hash)
    # put the pw_hash into the data dictionary
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"],
        "password": pw_hash,
    }
    # Call the save @classmethod on User
    user_id = User.save(data)

    # print("printing request.form", request.form)
    # user.User.save(request.form)

    # store user id into session
    session["user_id"] = user_id

    if "first_name" not in session:
        session["first_name"] = request.form["first_name"]

    return redirect("/users/dashboard")


@app.post("/login")
def login():
    """Processes the login form."""

    if not User.login_is_valid(request.form):
        return redirect("/")

    potential_user = User.get_by_email(request.form["email"])

    if not potential_user:
        flash("Invalid credentials.")
        return redirect("/")

    user = potential_user

    if not bcrypt.check_password_hash(user.password, request.form["password"]):
        flash("Invalid credentials.")
        return redirect("/")

    session["user_id"] = user.id

    return redirect("/users/dashboard")


@app.route("/users/dashboard")
def dashboard():
    return render_template("dashboard.html")


@app.route("/reset")
def reset_page():
    session.clear()
    return redirect("/")
