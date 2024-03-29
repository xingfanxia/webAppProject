import unittest, os.path, sys, psycopg2, getpass
sys.path.append(os.path.join(os.path.dirname(os.path.realpath(__file__)), os.pardir))
import api
from unittest import TestCase


# This is a API tester Class that will check the functionality of all the function in api.py
class apiTester(TestCase):
	def testGetAllPlayer(self):
	    self.assertTrue(api.getAllPlayer() != [])

	def testGetAllAttributes(self):
		result = ('Ronaldo', 'Cristiano Ronaldo', 31.0, 91.0, 90.0, 96.0, 63.0, 92.0, 80.0, 29.0, 94.0, 85.0)
		self.assertTrue(api.getAllAttributes("Cristiano Ronaldo") == result)

	def testCompareDifference(self):
		result = [26.0, 27.0, 12.0, 14.0, 28.0, -4.0, -59.0, 54.0, 37.0]
		self.assertTrue(api.compareDifference("Cristiano Ronaldo","Pepe") == result)

	def testSimilarPlayer(self):
		result = ['R. J_nsson', 'M. Gabbiadini', 'L. Suàrez']
		self.assertTrue(api.similarPlayer("Cristiano Ronaldo") == result)

	def testCalculateCos(self):
		player1 = [10, 10, 20, 30, 10, 20, 10, 40, 25]
		player2 = [20, 20, 5, 10, 20, 30, 10, 20, 15]
		result = 0.804884909686284
		self.assertTrue(api.CalculateCos(9, player1, player2) == result)

if __name__ == '__main__':
	unittest.main()
