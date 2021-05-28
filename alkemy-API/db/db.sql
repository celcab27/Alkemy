CREATE DATABASE IF NOT EXISTS alkemydb;

USE alkemydb;

CREATE TABLE usuarios
(
	id_ varchar(30) NOT NULL,
    password_ varchar(20) NOT NULL,
    mail_ varchar(85) NOT NULL,
    name_ varchar(40) DEFAULT NULL,
    surname varchar(40) DEFAULT NULL,
    PRIMARY KEY(id_)
);

CREATE TABLE operaciones
(
	id_ int NOT NULL AUTO_INCREMENT,
    user_id_ varchar(30) NOT NULL,
    category_ varchar(50) DEFAULT NULL,
    type_ varchar(10) NOT NULL,
    title_ varchar(80) DEFAULT NULL,
    amount_ int DEFAULT 0,
    date_ date,
    PRIMARY KEY(id_)
);

DESCRIBE usuarios;

