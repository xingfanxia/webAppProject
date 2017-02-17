import sys, flask, datetime, api
from flask import jsonify, request

app = flask.Flask(__name__, static_folder='website/static', template_folder='website')

# Render the main Page
@app.route('/')
def get_main_page():
    return flask.render_template('index.html')

# this appRoute calls the api function getAllattributes
# to search a given player and return a list of his attributes as a json object.
@app.route('/playerStats/<playerName>/')
def playerStats(playerName):
    result = api.getAllAttributes(playerName)
    return jsonify(results = result)

# this appRoute calls the api function compareDifference
# to compare two given player and return the differences,
# player1Stats, and player2Stats as a json object.
@app.route('/Search/Compare/<compare>')
def comparePlayerStats(compare):
    player1, player2 = getNames(compare)
    player1Stats, player2Stats, result = api.compareDifference(player1, player2)
    return jsonify(results = result, player1 = player1Stats, player2 = player2Stats)

# we use one url to pass two given names using a "+" sign to combine them. we have to split the url
# to get correct names
def getNames(compare):
    for i in range(len(compare)):
        if compare[i] == "+":
            return [compare[:i], compare[i+1:]]

# this appRoute calls the api function similarPlayer
# to compare all players with a given player and return 
# the most similar 7 players as a json object.
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

