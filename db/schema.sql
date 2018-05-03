DROP DATABASE IF EXISTS burgers_DB;
CREATE DATABASE burgers_DB;

USE burgers_DB;

DROP TABLE IF EXISTS burgers;
-- Create the table for burgers.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
name varchar(255) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);