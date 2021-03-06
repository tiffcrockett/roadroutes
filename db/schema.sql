DROP DATABASE IF EXISTS roadroutes_db;
-- CREATING DATABASE
CREATE DATABASE roadroutes_db;
-- CALLING THE DATABASE TO BE USED
USE roadroutes_db;
-- CREATING TABLE TO HOLD DATA FOR ROUTES THAT USER CREATES 
-- (THIS WILL BE DONE IN SEQUELIZE BUT THIS IS USED A REFERENCE)
CREATE TABLE routes (
    pkid INT NOT NULL AUTO_INCREMENT,
    routeName VARCHAR(255) NOT NULL,
    routeState VARCHAR(255) NOT NULL,
    routeCity VARCHAR(255) NOT NULL,
    routeArea VARCHAR(255) NOT NULL,
    routeDistance INT NOT NULL,
    routeSteps VARCHAR (8000) NOT NULL,
    createdBy VARCHAR (255) NOT NULL,
    createdAt VARCHAR(255) NOT NULL,
    updatedAt VARCHAR(255) NOT NULL,
    PRIMARY KEY (pkid)
);

CREATE TABLE favorites (
    pkid INT NOT NULL AUTO_INCREMENT,
    userId INT NOT NULL,
    routeId INT NOT NULL,
    createdAt VARCHAR(255) NOT NULL,
    updatedAt VARCHAR(255) NOT NULL,    
    PRIMARY KEY (pkid)
);

CREATE TABLE users (
    pkid INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    zip INT NOT NULL,
    createdAt VARCHAR(255) NOT NULL,
    updatedAt VARCHAR(255) NOT NULL,
    PRIMARY KEY (pkid)  
);

