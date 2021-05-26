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

DESCRIBE usuarios;

