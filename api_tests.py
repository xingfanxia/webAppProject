import api
import unittest
from unittest import TestCase


# This is a API tester Class that will check the functionality of all the function in api.py
class apiTester(TestCase):
	def testGetAllAttributes(self):
		self.assertTrue(api.getAllAttributes("Meiss") == [])

	def testCompareDifference(self):
		player1 = [10,10]
		player2 = [20,20]
		self.assertTrue(api.compareDifference(player1, player2) == [])

	def testCalculateCos(self):
		player1 = [10, 10]
		player2 = [20, 20]
		self.assertTrue(api.CalculateCos(9, player1, player2) == 0)

	def testAdvancedSearch(self):
		self.assertTrue(api.AdvancedSearch("Meiss") == [])

if __name__ == '__main__':
	unittest.main()
