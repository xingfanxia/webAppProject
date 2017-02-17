## Fifa Database WebApp Project

### `@author Xingfan Xia & Kaixing Wu`

### Description

This project is dedicated to create a webapp for FIFA fans to search, compare or find the similar players of a player they are interested in.

### Features

- Search for a player and show the stats
- Compare two players' stats
- Find similar players for player of interest

### Citation of Database
We find the database csv file from here:https://www.reddit.com/r/FIFA/comments/55ikx5/i_made_a_database_of_all_the_players_in_fifa_17/. This file contains the data from the official FIFA search website: http://sofifa.com/players?v=17&e=158492&offset=

### One To-Do Feature

- Advance Search: we wanted to do a advanced search option for the user to custom search but only to found out this implementation is to hard. We wanted to let the users to search queries such as "the youngest player in FIFA" or "the fastest player in FIFA", but it is too difficult to pass all the possible keywords, such as "less than", "greater or equal to", into the SQL queries. 

### Link to scripts:
Here is the repo in Bitbucket.
https://bitbucket.org/xingfanxia/webapp

Here is the `createtable.sql` to create database table at `root directory`:

```sql
DROP TABLE IF EXISTS players;
CREATE TABLE players (
  surname text,
  name text,
  age real,
  accel real,
  agility real,
  react real,
  balance real,
  stamina real,
  strength real,
  intercept real,
  position real,
  vision real
);
```

Here is the `transcribeNamestoList.py` at `root directory`:

```python
# This function is used to create a giant list of the full names that will be used in the auto search complete function.
# We only used the first 1000 players, which are also the strongest and most famous players, to improve the efficiency.
# -*- coding: utf-8 -*-
import csv

ls = []

with open('FIFA17final.csv') as f:
	for row in csv.reader(f):
		ls.append(row[1])

print(ls[:1000])
```

### License:

BootStrap 4.0 Beta

Chart.js

Flask

JQuery

FIFA 17 Banner:

![Fifa 17 Banner Image](http://images.performgroup.com/di/library/Goal_Mexico/f5/63/fifa-2017-portada_12xs5a1kyqmlq1fd4f6kd0c26v.jpg?t=-1111521698)