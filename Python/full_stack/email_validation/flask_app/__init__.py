# __init__.py
# this is where flask is imported
# flask is instantiated
# the secret key assigned here

from flask import Flask

app = Flask(__name__)
app.secret_key = "jdshjhajhgdsj"
