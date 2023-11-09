from flask_app import app
from flask import redirect, render_template, request, session, flash
from flask_app.models.user import User

from flask_app.models import art
from flask_app.controllers import arts
from flask_app import bcrypt


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/users/registration", methods=["POST"])
def reg_process():
    if not User.validate_user(request.form):
        # redirect to the route where the user form is rendered.
        return redirect("/")

    potential_user = User.get_by_email(request.form["email"])

    if potential_user:
        flash("Invalid Email.")
        return redirect("/")

    pw_hash = bcrypt.generate_password_hash(request.form["password"])
    print(pw_hash)
    # put the pw_hash into the data dictionary
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"],
        "password": pw_hash,
    }
    # Call the save @classmethod on User
    user_id = User.save(data)

    print("printing request.form", request.form)
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
    if "user_id" not in session:
        return redirect("/")

    id = session["user_id"]

    print("---------------->", id)

    all_users = User.all_users_with_all_paints()
    one_user = User.one_to_many(id)
    print("printing all users ------>", all_users)
    # all_arts = User.get_all()

    return render_template("dashboard.html", all_users=all_users, one_user=one_user)


@app.route("/pass_to_art_creations/<int:id>")
def pass_to_art_creations(id):
    return redirect(f"/creation/{id}")


@app.route("/creation/new")
def create_new():
    if "user_id" not in session:
        return redirect("/")

    user_id = session["user_id"]

    print("the art route user controllers, id test:", user_id)
    return render_template("new_creations.html", user_id=user_id)


@app.route("/update/<int:id>")
def update(id):
    return redirect(f"/creations/{id}/edit")


@app.route("/reset")
def reset_page():
    session.clear()
    return redirect("/")
