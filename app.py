from flask import Flask, render_template

app=Flask(__name__)

@app.route('/')
def homepage():
    
    return render_template('index.html')

@app.route('/api/Air_Quality_And_Natural_Gas')
def renderData():