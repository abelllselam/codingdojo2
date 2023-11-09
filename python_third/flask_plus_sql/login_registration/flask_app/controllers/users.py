from flask_app import app
from flask import redirect, render_template, request, session, flash
from flask_app.models.user import User
from flask_app import bcrypt


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/users/registration", methods=["POST"])
def reg_process():
    if not User.validate_user(request.form):
        # redirect to the route where the user form is rendered.
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
    user_id = user.User.save(data)

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

    return render_template("dashboard.html", name=session["user_id"])


@app.route("/reset")
def reset_page():
    session.clear()
    return redirect("/")
