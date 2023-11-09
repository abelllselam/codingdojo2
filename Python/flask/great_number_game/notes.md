from flask import Flask, render_template, session, redirect,request
import random

app = Flask(**name**)

app.secret_key="Benny bob wuz heer."

@app.route('/')
def index():
if "num" not in session:
session['num'] = random.randint(1,100)

    return render_template("index.html")

@app.route('/guess',methods=['POST'])
def guess():
session['guess'] = int(request.form['guess'])
return redirect('/')

@app.route('/reset')
def reset():
session.clear()
return redirect('/')

if **name**=="**main**":
app.run(debug=True)

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Great Number Game</title>
</head>
<body>
    <div class="flex justify-center col-6 mx-auto text-center">
        <h1 >Welcome to the Great Number Game!!!</h1>
        <p>I am thinking of a number between 1 and 100.</p>
        <form action="/guess" class="bg-dark text-warning text-center p-5 rounded" method="post">
            <div class="form-group">
                <label for="guess">Take a Guess!!!</label>
                <input type="text" name="guess" id="guess" class="form-control">
            </div>
            <input type="submit" value="Guess" class="btn btn-warning">
        </form>
        {% if 'guess' in session: %}
            {% if session['guess'] == session['num'] %}
                <div class="card bg-success">
                    <h2>You got the number!</h2>
                    <a href="/reset" class="btn btn-primary">Play Again</a>
                </div>
            {% elif session['guess'] < session['num'] %}
                <div class="card bg-danger">
                    <h2>Too Low!!!</h2>
                    
                </div>
            {% else %}
                <div class="card bg-danger">
                    <h2>Too High!!!</h2>
                </div>
            {% endif %}
        {% endif %}
    </div>
</body>
</html>