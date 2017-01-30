# API File containing all the HTML query parsing functions For WebApp

@app.route('/books/<author_name>')
def get_books(author_name):
	""" Return a list of dictionaries written by the given author, each of which describes one book with keys 'title' and 'publication_year'.

	Example: http://whatever.com/books/Austen
	[{'title':'Pride and Prejudice', 'publication_year':1813},
	 {'title':'Sense and Sensibility', 'publication_year':1813},
	 {'title':'Emma', 'publication_year':1815}]
	"""
	return []