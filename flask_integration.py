#!/usr/bin/env python3
'''
    javascript_sample.py
    Jeff Ondich, 5 May 2016
    Modified by Eric Alexander, 10 February 2017

    Flask app serving up the pieces of the javascript-sample for
    CS 257, Spring 2016.
'''
import sys, flask, datetime, api
from flask import jsonify, request

app = flask.Flask(__name__, static_folder='website/static', template_folder='website')

@app.route('/')
def get_main_page():
    return flask.render_template('index.html')

@app.route('/date/')
def get_date():
    return datetime.datetime.now().strftime("%A, %d. %B %Y %I:%M:%S %p")

@app.route('/', methods=['POST'])
def inputValue():
    value = request.form['srch-term-players']
    result = api.getAllAttributes(value)
    print("the input value is: ", value)
    return result[0]

@app.route('/fruitPlease/')
def get_fruit():
    fruitRatings = [
        {
            'name': 'banana',
            'rating': 6
        },
        {
            'name': 'blueberry',
            'rating': 8
        },
        {
            'name': 'apple',
            'rating': 9
        }
    ]
    
    return jsonify({'results': fruitRatings})

if __name__ == '__main__':
    if len(sys.argv) != 3:
        print('Usage: {0} host port'.format(sys.argv[0]), file=sys.stderr)
        exit()
    host = sys.argv[1]
    port = int(sys.argv[2])
    app.run(host=host, port=port, debug=True)

