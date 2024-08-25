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


# Route for Seasonal Comparison of AQI and NG_consumption for top 10 States
# @app.route('/api/seasonal_aqi_natural_gas_comparison')
# def renderSeasonalData():
    # return render_template('seasonal_aqi_natural_gas_comparison_for_ten_states.html')
