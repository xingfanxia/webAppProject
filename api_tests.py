import unittest, os.path, sys, psycopg2, getpass
sys.path.append(os.path.join(os.path.dirname(os.path.realpath(__file__)), os.pardir))
import api
from unittest import TestCase


# This is a API tester Class that will check the functionality of all the function in api.py
class apiTester(TestCase):
    # def testGetAllPlayer(self):
    #     print(api.getAllPlayer())
    #     self.assertTrue(api.getAllAttributes() != [])

    def testGetAllAttributes(self):
        print(api.getAllAttributes("Cristiano Ronaldo"))
        self.assertTrue(api.getAllAttributes("Cristiano Ronaldo") != [])

    def testCompareDifference(self):
        player1 = [10, 10]
        player2 = [20, 20]
        self.assertTrue(api.compareDifference(player1, player2) == [])
    def testSimilarPlayer(self):
        self.assertTrue(api.similarPlayer("Cristiano Ronaldo") != [])
    def testCalculateCos(self):
        player1 = [10, 10]
        player2 = [20, 20]
        self.assertTrue(api.CalculateCos(9, player1, player2) == 0)

    def testAdvancedSearch(self):
        self.assertTrue(api.AdvancedSearch("Meiss") == [])


if __name__ == '__main__':
    # link to database
    database = getpass.getuser()
    user = getpass.getuser()
    password = getpass.getpass('Enter PostgreSQL password for user {}: '.format(user))

    # Login to the database
    try:
        connection = psycopg2.connect(database=database, user=user, password=password)
    except Exception as e:
        print(e)
        exit() 
           
    unittest.main()
