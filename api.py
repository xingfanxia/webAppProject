# API File containing all the HTML query parsing functions For WebApp
'''1.What is the best player in xxx
	2. Compare two player in XXX
	3. Similar player suggestion
	4. Get player attributes
	'''
import math, flask, sys, json, jinja2, psycopg2, getpass
from flask import render_template, request

# link to database
database = getpass.getuser()
user = getpass.getuser()
#password = getpass.getpass('Enter PostgreSQL password for user {}: '.format(user))

# Login to the database
try:
	connection = psycopg2.connect(database=database, user=user, password='moon329tiger')
except Exception as e:
	print(e)
	exit() 

try:
	cur = connection.cursor()
except Exception as e:
	print('Cursor error: {}'.format(e))
	connection.close()
	exit()

app = flask.Flask(__name__)

def getAllPlayer():
	# return entire database as a list
	try:
		findAllPlayer = "SELECT * FROM players;"
		cur.execute(findAllPlayer)
		allplayer = cur.fetchall()
	except Exception as e:
		print('Cursor error: {}'.format(e))
		connection.close()
		exit()
	return allplayer

@app.route('/Search/Player/<Name>')
def getAllAttributes(Name):
	# return a list of search result for a specific player, such as name, age, ability...
	'''player.printAllattributes()
	'''
	try:
		findPlayer = "SELECT * FROM players WHERE name = (%s);"
		data = (str(Name),)
		cur.execute(findPlayer,data)
		player = cur.fetchall()
	except Exception as e:
		print('Cursor error: {}'.format(e))
		connection.close()
		exit()
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
	# return a list player objects that have similar attributes with given player
	playerList = getAllPlayer()
	playerAttr = getAllAttributes(player)
	#print(playerAttr[0])
	differenceDictionary = dict()
	for ComparePlayer in playerList:
		angle = CalculateCos(9, playerAttr[0][3:],ComparePlayer[3:])
		differenceDictionary[angle] = ComparePlayer[1]	
	result = list(differenceDictionary.keys())
	#print(result)
	sortedDictionary = result.sort()
	#print(sortedDictionary)
	# The most similar player should be this player itself, so we choose the second player as the start to print.
	print(differenceDictionary[sortedDictionary[1]])
	print(differenceDictionary[sortedDictionary[2]])
	print(differenceDictionary[sortedDictionary[3]])
	similarList = []
	for i in range(0,3,1):
		similarList.append(differenceDictionary[sortedDictionary[i]])
	return similarList
# def similarPlayer(player):
# 	similarList = [];
# 	# return a list player objects that have similar attributes with given player
# 	playerList = [[1,1,3,9,4,5,6,4,3,2,1,6],[1,2,3,5,4,5,6,4,3,2,1,6],[1,3,3,6,4,5,6,4,3,2,1,6],[1,3,3,0,4,5,6,4,3,2,1,6]]
# 	playerAttr = [1,1,3,9,4,5,6,4,3,2,1,6]
# 	differenceDictionary = dict()
# 	for ComparePlayer in playerList:
# 		angle = CalculateCos(9, playerAttr[3:],ComparePlayer[3:])
# 		differenceDictionary[angle] = ComparePlayer[1]
# 	sortedDictionary = sorted(differenceDictionary.keys())
# 	# The most similar player should be this player itself, so we choose the second player as the start to print.
# 	print(differenceDictionary[sortedDictionary[1]])
# 	print(differenceDictionary[sortedDictionary[2]])
# 	print(differenceDictionary[sortedDictionary[3]])
# 	for i in range(0,3,1):
# 		similarList.append(differenceDictionary[sortedDictionary[i]])
# 	return similarList

def CalculateCos(N, vector1, vector2):
	# This function is used to find the difference of two players using the Cos Theory
	# It calculates the Cos vaule of the angle between N-dimision two vector made by player attributes
	# and turn a number
	dotProduct = 0
	vectorLen1 = 0
	vectorLen2 = 0
	for i in range(0,len(vector1),1):
		dotProduct += vector1[i]*vector2[i]
	for attr1 in vector1:
		vectorLen1 += attr1*attr1
	vectorLength1 = math.sqrt(vectorLen1)
	#print(vectorLength1)
	for attr2 in vector2:
		vectorLen2 += attr2*attr2
	vectorLength2 = math.sqrt(vectorLen2)
	# print(vectorLength1,vectorLength2,vectorLength2*vectorLength1)
	if vectorLength1*vectorLength2 == 0:
		return 99
	cosV1V2 = dotProduct / (vectorLength1*vectorLength2)
	return cosV1V2
# def main():
# 	similarPlayer(123)
# main()
# @app.route('/AdvancedSearch/')
# def AdvancedSearch():
# 	# using keywords such as name,age, attribute to form a Sql quiry that
# 	# search the database and return list of results.
# 	sqlSearch = list(flask.request.args)
# 	for item in sqlSearch：
# 		Findplayer = "SELECT * FROM players WHERE (search) = (keyword) VALUES (%s, %s);"
# 		searchWord = (str(search),)
# 		keyword = (str(key),)
# 		cur.execute(Findplayer, searchWord, keyword)
# 		player = cur.fetchall()
# # 	return player	
# 	name = request.args.get(Name)
# 	age = request.args.get(Age)
# 	attribute = request.args.get(Attribute)
# 	sql = "Select * , From database, where NAME = name, Age = age, Attribute = attribute"
