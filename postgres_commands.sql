CREATE TYPE PRIORITY AS ENUM ('none', 'low', 'medium', 'high');

CREATE TABLE lists(
id SERIAL PRIMARY KEY,
name varchar(20) NOT NULL,
color varchar(7) DEFAULT '#becedd',
location varchar(15) DEFAULT 'on this computer');

CREATE TABLE tasks(
id SERIAL PRIMARY KEY,
title varchar(20),
notes text,
priority PRIORITY DEFAULT 'none',
deadline date,
listId int NOT NULL,
isComplete boolean DEFAULT false);