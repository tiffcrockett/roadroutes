
-- Inserting data into ROUTES table
INSERT INTO routes (routeName, routeState, routeCity, routeArea, routeDistance, routeSteps, createdBy, createdAt, updatedAt) 
VALUES ('Cherry Trail', 'AZ', 'Tucson', 'East', '10','test', 'brandond','2021-2-27 1:19','2021-2-27 1:19');

INSERT INTO routes (routeName, routeState, routeCity, routeArea, routeDistance, routeSteps, createdBy, createdAt, updatedAt) 
VALUES ('City Ride', 'AZ', 'Gilbert', 'West', '15','test', 'tiffanyc','2021-2-27 1:19','2021-2-27 1:19');

INSERT INTO routes (routeName, routeState, routeCity, routeArea, routeDistance, routeSteps, createdBy, createdAt, updatedAt) 
VALUES ('Washington St', 'AZ', 'phoenix', 'North', '20','test', 'jacobk','2021-2-27 1:19','2021-2-27 1:19');

-- Inserting data into USERS table
INSERT INTO users (email, password, firstName, lastName, city, state, zip, createdAt, updatedAt)
VALUES ('brando214@gmail.com','password', 'brandon', 'dana', 'gilbert', 'az', '85143','2021-2-27 1:19','2021-2-27 1:19');

INSERT INTO users (email, password, firstName, lastName, city, state, zip, createdAt, updatedAt)
VALUES ('tiffc@gmail.com','password', 'tiffany', 'crockett', 'tucson', 'az', '85248','2021-2-27 1:19','2021-2-27 1:19');

INSERT INTO users (email, password, firstName, lastName, city, state, zip, createdAt, updatedAt)
VALUES ('jacobk@gmail.com', 'password', 'jacob', 'kriese', 'mesa', 'az', '85296','2021-2-27 1:19','2021-2-27 1:19');

-- Inserting data into the FAVORITES table 
INSERT INTO favorites (userId, routeId, createdAt, updatedAt) 
VALUES ('1','217', '2021-2-27 1:19','2021-2-27 1:19');

INSERT INTO favorites (userId, routeId, createdAt, updatedAt) 
VALUES ('2','129', '2021-2-27 1:19','2021-2-27 1:19');

INSERT INTO favorites (userId, routeId, createdAt, updatedAt) 
VALUES ('3','357', '2021-2-27 1:19','2021-2-27 1:19');

