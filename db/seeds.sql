
-- Inserting data into ROUTES table
INSERT INTO routes (routeName, routeState, routeCity, routeArea, routeDistance, routeSteps, createdBy, createdAt, updatedAt) 
VALUES ('Fish Creek Thoroughfare', 'TX', 'Canroe', 'East', '34mi','"Park in shopping plaza lot at Tanque Verde Rd and Catalina Hwy\nTurn left (E) onto E Tanque Verde Rd\nTurn right (S) onto Tanque Verde Loop Road \nTurn left (E) onto E Speedway Blvd\nTurn right (S) onto N Freeman Rd\nTurn left (S) onto S Old Spanish Trail\nBreak at Saguaro National Park E\nContinue (S) on S Old Spanish Trail \nTurn left (E) onto E Old Spanish Trail\nTurn right (W) onto S Pistol Hill Rd – climb the hill!!\nTurn right (N) onto S Camino Loma Alta \nTurn left (W) onto E Old Spanish Trail\nTurn right (N) onto S Old Spanish Trail\nTurn left (W) onto E Escalante Rd\nTurn right (N) onto S Houghton Rd\nTurn left (W) onto Tanque Verde Rd \nContinue to start location \nCyclists hang out a LeBuzz Café – in the plaza"', 'brandond','2021-2-27 1:19','2021-2-27 1:19');

INSERT INTO routes (routeName, routeState, routeCity, routeArea, routeDistance, routeSteps, createdBy, createdAt, updatedAt) 
VALUES ('Taos Ride', 'NM', 'Taos', 'West', '15','"Taos to Amole Canyon Rd\nCentral part of town\nDistance: 34mi\nPark at Taos High School\nGo south on Gusdorf Rd \nTake a right on Este Es Rd\nTake a left at Paseo del Pueblo Sur\nGo left at NM 518\nTurn right at Espinoza\nTurn left at Camino Alto\nStay on bike road till it merges back on to NM518\nRide to Amole Canyon Road\nThis in an out and back ride"', 'tiffanyc','2021-2-27 1:19','2021-2-27 1:19');

INSERT INTO routes (routeName, routeState, routeCity, routeArea, routeDistance, routeSteps, createdBy, createdAt, updatedAt) 
VALUES ('Butte to Spaceport', 'NM', 'Truth or Consequences', 'North', '52 mi','"Can park at Guaranty Bank & Trust, just off River Pointe drive\nRiverpoint Dr/Crescent Campus - South\nGrand Central Parkway/Riverstone Court – West\nSergeant Ed Holcomb Blvd – North\nFM 2854 – West\nNorth Loop 336  - North\nW Davis St/Highway 105 – West\nMcCaleb Rd – South\nMcCaleb turns into Fish Creek Thoroughfare\nWoodforest Parkway – East and loop back to Fish Creek\nAt FM2854 – East\nSouth Loop 336 – South\nSergeant Ed Holcomb Blvd – South\nGrand Central Parkway/Riverstone Court – East\nCrescent Campus/Riverpoint Dr - North"', 'jacobk','2021-2-27 1:19','2021-2-27 1:19');


-- Inserting data into USERS table
INSERT INTO users (email, password, firstName, lastName, city, state, zip, createdAt, updatedAt)
VALUES ('brando214@gmail.com','password', 'brandon', 'dana', 'gilbert', 'az', '85143','2021-2-27 1:19','2021-2-27 1:19');

INSERT INTO users (email, password, firstName, lastName, city, state, zip, createdAt, updatedAt)
VALUES ('tiffc@gmail.com','password', 'tiffany', 'crockett', 'tucson', 'az', '85248','2021-2-27 1:19','2021-2-27 1:19');

INSERT INTO users (email, password, firstName, lastName, city, state, zip, createdAt, updatedAt)
VALUES ('jacobk@gmail.com', 'password', 'jacob', 'kriese', 'mesa', 'az', '85296','2021-2-27 1:19','2021-2-27 1:19');

-- Inserting data into the FAVORITES table 
INSERT INTO favorites (userId, routeId, createdAt, updatedAt) 
VALUES ('1','1', '2021-2-27 1:19','2021-2-27 1:19');

INSERT INTO favorites (userId, routeId, createdAt, updatedAt) 
VALUES ('2','2', '2021-2-27 1:19','2021-2-27 1:19');

INSERT INTO favorites (userId, routeId, createdAt, updatedAt) 
VALUES ('3','3', '2021-2-27 1:19','2021-2-27 1:19');

