DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;


CREATE TABLE burgers (
id INT NOT NULL AUTO_INCREMENT,
item_id INTEGER(50) NOT NULL,
burger_name VARCHAR(150) NOT NULL,
devoured BOOLEAN,
PRIMARY KEY (id);
);