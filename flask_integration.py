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

@app.route('/playerStats/<playerName>/')
def playerStats(playerName):
    result = api.getAllAttributes(playerName)
    return jsonify(results = result)

@app.route('/Search/Compare/<compare>')
def comparePlayerStats(compare):
    player1, player2 = getNames(compare)
    player1Stats, player2Stats, result = api.compareDifference(player1, player2)
    return jsonify(results = result, player1 = player1Stats, player2 = player2Stats)

def getNames(compare):
    for i in range(len(compare)):
        if compare[i] == "+":
            return [compare[:i], compare[i+1:]]

@app.route('/similarPlayers/<playerName>')
def findSimilarPlayers(playerName):
    result, angleList = api.similarPlayer(playerName)
    return jsonify(results = result, angleList = angleList)

if __name__ == '__main__':
    if len(sys.argv) != 3:
        print('Usage: {0} host port'.format(sys.argv[0]), file=sys.stderr)
        exit()
    host = sys.argv[1]
    port = int(sys.argv[2])
    app.run(host=host, port=port, debug=True)

