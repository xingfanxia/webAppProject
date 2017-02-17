# This function is used to create a giant list of the full names that will be used in the auto search complete function.
# We only used the first 1000 players, which are also the strongest and most famous players, to improve the efficiency.
# -*- coding: utf-8 -*-
import csv

ls = []

with open('FIFA17final.csv') as f:
	for row in csv.reader(f):
		ls.append(row[1])

print(ls[:1000])