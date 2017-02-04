# API File containing all the HTML query parsing functions For WebApp
'''1.What is the best player in xxx
	2. Compare two player in XXX
	3. Similar player suggestion
	4. Get player attributes
	'''
import math
import flask
from flask import render_template,request
import json
import sys
import jinja2

@app.route('/Search/Player/<Name>')

def getAllAttributes(player):
 # return a list of search result for a specific player, such as name, age, ability...
	'''player.printAllattributes()
	'''
 	return []

@app.route('/Search/Compare/?Player1=name1&Player2=name2>')

def compareDifference(Player1, Player2):
# return a list of the difference between two player, such as age, ability...
	# using Player1 attribute - Player2 attribute
	'''difference = []
	for attr1 in Player1.getPhysicalAttribute():
		for attr2 in Player2.getPhysicalAttribute():
			difference.append(attr1-attr2)
	return difference
	'''
	return []

@app.route('/Search/Similar/<Player>')

def similarPlayer(player,playerList):
	# return a list player objects that have similar attributes with given player
	'''standardDeviationDictionary = dict()
		for ComparePlayer in playerList:
			angle = CalculateCos(player.getAllAttributes(),ComparePlayer.getAllAttributes())
			standardDeviationDictionary[angle] = ComparePlayer.getName()
		sortedDictionary = sorted(standardDeviationDictionary.keys())
		# The most similar player should be this player itself, so we choose the second player as the start to print.
		print(standardDeviationDictionary[sortedDictionary[1]])
		print(standardDeviationDictionary[sortedDictionary[2]])
		print(standardDeviationDictionary[sortedDictionary[3]])'''
	return []

def CalculateCos(N, vector1,vector2):
	# This function is used to find the difference of two players using the Cos Theory
	# It calculates the Cos vaule of the angle between N-dimision two vector made by player attributes
	# and turn a number
	'''for attr1 in vector1:
		for attr2 in vector2:
		dotProduct += attr1*attr2
	for attr1 in vector1:
		vectorLen1 += attr1*attr1
	vectorLength1 = math.sqrt(vectorLen1)
	for attr2 in vector2:
		vectorLen2 += attr2*attr2
	vectorLength2 = math.sqrt(vectorLen2)
	cosV1V2 = dotProduct / (vectorLength1*vectorLength2)
	return cosV1V2'''
	return 0

@app.route('/AdvancedSearch/?Name=name&Age=age&Attribute=attribute')
def AdvancedSearch():
	# using keywords such as name,age, attribute to form a Sql quiry that
	# search the database and return list of results.
	'''name = request.args.get(Name)
	age = request.args.get(Age)
	attribute = request.args.get(Attribute)
	sql = "Select * , From database, where NAME = name, Age = age, Attribute = attribute"'''
	return []



