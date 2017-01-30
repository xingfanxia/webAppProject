# API File containing all the HTML query parsing functions For WebApp
'''1.What is the best player in xxx
	2. Compare two player in XXX
	3. Similar player suggestion
	4. Get player attributes
	5. '''
@app.route('/Search/Name/<Name>')
def getAllAttributes(Name):
 # return a list of search result for a specific player, such as name, age, ability...
	attr = [Cristiano,Ronaldo,31,94,LW,84,93,87,82,88,93]

    return attr


@app.route('/Search/Compare/Player1/<Player2>')

def compare(Player2):
# return a list of the difference between two player, such as age, ability...
    # using Player1 attribute - Player2 attribute
	dif = [-5,20,-10,0,20]
	return dif
@app.route('/Search/Similar/<Player>')
def similarPlayer(player):
    # return

