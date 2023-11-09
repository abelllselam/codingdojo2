from flask_app import app
from flask import Flask, render_template, redirect, request, session, flash


@app.route("/")
def index():
    return render_template("index.html")
