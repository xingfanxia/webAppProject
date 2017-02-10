#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2017-02-02 18:31:13
# @Author  : Xingfan Xia (xiax@carleton.edu)
# @Link    : http://xiax.tech
# @Version : $1.0$
# 
# This file defines the player class used in the webapp

class Player():

	# init the player class with his attributes
	# the attribute_ls contains the following fields:
	# Surname, Name, Age, Accel,Agility, React, Balance, Stamina, Strength, 
	# Intercept, Position, Vision
	def __init__(self, attribute_ls):
		self.surname = attribute_ls[0]
		self.name = attribute_ls[1]
		self.age = attribute_ls[2]
		self.accel = attribute_ls[3]
		self.agility = attribute_ls[4]
		self.react = attribute_ls[5]
		self.balance = attribute_ls[6]
		self.stamina = attribute_ls[7]
		self.strength = attribute_ls[8]
		self.intercept = attribute_ls[9]
		self.position = attribute_ls[10]
		self.vision = attribute_ls[11]
		self.attributes = attribute_ls
		self.rating = 0


	# print the all the attributes of one player
	def printAllattributes(self):
		fieldNames = ["Surname", "Name", "Age", "Accel", "Agility", "React", 
		"Balance"," Stamina", "Strength", 
		"Intercept", "Position", "Vision"]
		for i in range(len(fieldNames)):
			print("{field}: {value} \n".format(field = fieldNames[i], value = self.attributes[i]))

	# return a list of physical attributes of the player excluding his surname, name and age
	def getPhysicalAttributes(self):
		return self.attributes[2:]

	def getRating(self):
		if (self.rating == 0):
			physAttr = self.getPhysicalAttributes()
			total = 0
			for item in self.attributes[2:]:
				total += item
			self.rating = total/len(physAttr)
		return self.rating

	# 12 accessor functions to return attributes of the player
	def getSurname(self):
		return self.attributes[0]

	def getName(self):
		return self.attributes[1]
	
	def getAge(self):
		return self.attributes[2]

	def getAccel(self):
		return self.attributes[3]	

	def getAggility(self):
		return self.attributes[4]

	def getReact(self):
		return self.attributes[5]
	
	def getBalance(self):
		return self.attributes[6]

	def getStamina(self):
		return self.attributes[7]

	def getStrength(self):
		return self.attributes[8]

	def getIntercept(self):
		return self.attributes[9]
	
	def getPosition(self):
		return self.attributes[10]

	def getVision(self):
		return self.attributes[11]	