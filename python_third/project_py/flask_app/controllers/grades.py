from flask_app import app
from flask import Flask, redirect, render_template, request, session, flash


@app.route("/grades")
def show_grade():
    return render_template("show_grade.html")


@app.route("/grades/view")
def view_grade():
    return render_template("view_grade.html")
