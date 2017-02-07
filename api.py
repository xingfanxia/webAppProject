# API File containing all the HTML query parsing functions For WebApp
'''1.What is the best player in xxx
	2. Compare two player in XXX
	3. Similar player suggestion
	4. Get player attributes
	'''
import math, flask, sys, json, jinja2, psycopg2, getpass
from flask import render_template, request

# # link to database
# database = getpass.getuser()
# user = getpass.getuser()
# password = getpass.getpass('Enter PostgreSQL password for user {}: '.format(user))

# # Login to the database
# try:
#     connection = psycopg2.connect(database=database, user=user, password=password)
# except Exception as e:
#     print(e)
#     exit() 

# try:
#     cur = connection.cursor()
# except Exception as e:
#     print('Cursor error: {}'.format(e))
#     connection.close()
#     exit()

app = flask.Flask(__name__)

def getAllPlayer():
	# return entire database as a list
	findAllPlayer = "SELECT * FROM players;"
	cur.execute(findAllPlayer)
	allplayer = cur.fetchall()
	return allplayer

@app.route('/Search/Player/<Name>')
def getAllAttributes(player):
	# return a list of search result for a specific player, such as name, age, ability...
	'''player.printAllattributes()
	'''
	Findplayer = "SELECT * FROM players WHERE name = (Name) VALUES (%s);"
	data = (str(player),)
	cur.execute(Findplayer,data)
	player = cur.fetchall()
	return player


@app.route('/Search/Compare/<Player1>/<Player2>')
def compareDifference(Player1, Player2):
	# return a list of the difference between two player, such as age, ability...
	# using Player1 attribute - Player2 attribute
	difference = []
	Attr1 = getAllAttributes(Player1)
	Attr2 = getAllAttributes(Player2)
	for i in range(3, len(Attr1), 1):
		difference.append(Attr1[i] - Attr2[i])
	return difference


@app.route('/Search/Similar/<Player>')
def similarPlayer(player):
	similarList = [];
	# return a list player objects that have similar attributes with given player
	playerList = getAllPlayer()
	playerAttr = getAllAttributes(player)
	differenceDictionary = dict()
	for ComparePlayer in playerList:
		angle = CalculateCos(playerAttr[3:],ComparePlayer[3:])
		differenceDictionary[angle] = ComparePlayer[1]
	sortedDictionary = sorted(differenceDictionary.keys())
	# The most similar player should be this player itself, so we choose the second player as the start to print.
	print(differenceDictionary[sortedDictionary[1]])
	print(differenceDictionary[sortedDictionary[2]])
	print(differenceDictionary[sortedDictionary[3]])
	for i in range(0,3,1):
		similarList.append(differenceDictionary[sortedDictionary[i]])
	return similarList


def CalculateCos(N, vector1, vector2):
	# This function is used to find the difference of two players using the Cos Theory
	# It calculates the Cos vaule of the angle between N-dimision two vector made by player attributes
	# and turn a number
	for attr1 in vector1:
		for attr2 in vector2:
		dotProduct += attr1*attr2
	for attr1 in vector1:
		vectorLen1 += attr1*attr1
	vectorLength1 = math.sqrt(vectorLen1)
	for attr2 in vector2:
		vectorLen2 += attr2*attr2
	vectorLength2 = math.sqrt(vectorLen2)
	cosV1V2 = dotProduct / (vectorLength1*vectorLength2)
	return cosV1V2


@app.route('/AdvancedSearch/？name = Name')
def AdvancedSearch(search,key):
	# using keywords such as name,age, attribute to form a Sql quiry that
	# search the database and return list of results.
	Findplayer = "SELECT * FROM players WHERE (search) = (keyword) VALUES (%s, %s);"
	searchWord = (str(search),)
	keyword = (str(key),)
	cur.execute(Findplayer, searchWord, keyword)
	player = cur.fetchall()
	
	return player	
	'''name = request.args.get(Name)
	age = request.args.get(Age)
	attribute = request.args.get(Attribute)
	sql = "Select * , From database, where NAME = name, Age = age, Attribute = attribute"'''
	return []
