from flask import Flask, request, session, redirect, render_template, flash
from flask_app.models import email
from flask_app import app


@app.route("/")
def index():
    return render_template("index.html")


@app.post("/create")
def create_new():
    if not email.Email.validate_user(request.form):
        # we redirect to the template with the form.
        return redirect("/")
    # ... do other things
    one_email = email.Email.create(request.form)

    return redirect("/success")


@app.route("/success")
def success():
    all_emails = email.Email.get_all()
    return render_template("success.html", all_emails=all_emails)
