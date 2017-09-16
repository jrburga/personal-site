#!/usr/bin/python
import cgi
import json
import MySQLdb

db = MySQLdb.connect(host='sql.mit.edu', user='jrburga', passwd='rip31hog', db='jrburga+wp')

def main():
	print json.dumps(str(fetch()))

def fetch():
	cur = db.cursor()

	cur.execute('select * from wp_users')

	r = [dict((cur.description[i][0], value) for i, value in enumerate(row)) for row in cur.fetchall()]
	fetched = r[0] if r else None

	db.close()

	return fetched

try:
	print("Content-type: text/html\n\n")
	main()
except:
	cgi.print_exception()
	