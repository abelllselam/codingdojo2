from flask import Flask, session, request, redirect, render_template

from flask_app import app

from flask_app.models.user import User


@app.route("/")
def read_all():
    users = User.read_all()

    print(users)

    return render_template("read_all.html", users=users)


@app.route("/create_user", methods=["POST"])
def create_user():
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"],
    }
    # session["data"] = data

    User.save(data)

    return redirect("/create_show")


@app.route("/create_show")
def create_show():
    # print(session["data"])
    # value = session["data"]
    return render_template("create.html")


@app.route("/read_one/<int:user_id>")
def read_one(user_id):
    user = User.read_one(user_id)

    return render_template("read_one.html", user=user)


@app.route("/user/edit/<int:user_id>")
def friend_details(user_id):
    user = User.read_one(user_id)
    return render_template("edit.html", user=user)


@app.route("/user/update", methods=["POST"])
def update_user():
    user = User.update(request.form)
    return redirect(f"/")


# @app.route("/edit_page")
# def edit_page():
#     return render_template("edit.html")
@app.route("/destroy/<int:id>")
def destroy(id):
    data = {"id": id}
    User.destroy(data)
    return redirect("/")


@app.route("/clear_session")
def clear_session():
    session.clear()

    return redirect("/")
