import pandas as pd
from flask import Flask, render_template

app=Flask(__name__)

@app.route('/')
def homepage():
    
    return render_template('index.html')

@app.route('/api/Air_Quality_And_Natural_Gas')
def renderData():

    df = pd.read_csv('static/Resources/combined_df.csv')

    return df.to_json(orient='records')