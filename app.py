import sqlite3, pandas as pd
from flask import Flask, render_template


app=Flask(__name__)

@app.route('/')
def homepage():
    
    return render_template('index.html')

@app.route('/api/Air_Quality_And_Natural_Gas')
def renderData():
    con  = sqlite3.connect('static/Resources/new_aqi_ngsDB.sqlite')

    df = pd.read_sql('SELECT * FROM combined_df', con)

    return df.to_json(orient='records')