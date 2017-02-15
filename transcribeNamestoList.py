# -*- coding: utf-8 -*-
import csv

ls = []

with open('FIFA17final.csv') as f:
	for row in csv.reader(f):
		ls.append(row[1])

print(ls[:1000])