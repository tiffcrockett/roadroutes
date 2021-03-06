
-- Inserting data into ROUTES table
INSERT INTO routes (routeName, routeState, routeCity, routeArea, routeDistance, routeSteps, createdBy, createdAt, updatedAt) 
VALUES ('Fish Creek Thoroughfare', 'TX', 'Canroe', 'East', '34mi','Can park at Guaranty Bank & Trust, just off River Pointe drive
Riverpoint Dr/Crescent Campus - South
Grand Central Parkway/Riverstone Court – West
Sergeant Ed Holcomb Blvd – North
FM 2854 – West
North Loop 336  - North
W Davis St/Highway 105 – West
McCaleb Rd – South
McCaleb turns into Fish Creek Thoroughfare
Woodforest Parkway – East and loop back to Fish Creek
At FM2854 – East
South Loop 336 – South
Sergeant Ed Holcomb Blvd – South
Grand Central Parkway/Riverstone Court – East
Crescent Campus/Riverpoint Dr - North', 'brandond','2021-2-27 1:19','2021-2-27 1:19');

INSERT INTO routes (routeName, routeState, routeCity, routeArea, routeDistance, routeSteps, createdBy, createdAt, updatedAt) 
VALUES ('Taos Ride', 'NM', 'Taos', 'West', '15','Taos to Amole Canyon Rd
Central part of town
Distance: 34mi
Park at Taos High School
Go south on Gusdorf Rd 
Take a right on Este Es Rd
Take a left at Paseo del Pueblo Sur
Go left at NM 518
Turn right at Espinoza
Turn left at Camino Alto
Stay on bike road till it merges back on to NM518
Ride to Amole Canyon Road
This in an out and back ride', 'tiffanyc','2021-2-27 1:19','2021-2-27 1:19');

INSERT INTO routes (routeName, routeState, routeCity, routeArea, routeDistance, routeSteps, createdBy, createdAt, updatedAt) 
VALUES ('Butte to Spaceport', 'NM', 'Truth or Consequences', 'North', '52 mi','Start at Dam Site
Take the road (E) to Eagle Rd
Bathrooms and water at Eagle Rd 
Continue (S) on road to Spaceport
Down and back route – steep climb to start', 'jacobk','2021-2-27 1:19','2021-2-27 1:19');

INSERT INTO routes (routeName, routeState, routeCity, routeArea, routeDistance, routeSteps, createdBy, createdAt, updatedAt) 
VALUES ('Butte to Spaceport', 'NM', 'Truth or Consequences', 'North', '42 mi','Park in shopping plaza lot at Tanque Verde Rd and Catalina Hwy
Turn left (E) onto E Tanque Verde Rd
Turn right (S) onto Tanque Verde Loop Road 
Turn left (E) onto E Speedway Blvd
Turn right (S) onto N Freeman Rd
Turn left (S) onto S Old Spanish Trail
Break at Saguaro National Park E
Continue (S) on S Old Spanish Trail 
Turn left (E) onto E Old Spanish Trail
Turn right (W) onto S Pistol Hill Rd – climb the hill!!
Turn right (N) onto S Camino Loma Alta 
Turn left (W) onto E Old Spanish Trail
Turn right (N) onto S Old Spanish Trail
Turn left (W) onto E Escalante Rd
Turn right (N) onto S Houghton Rd
Turn left (W) onto Tanque Verde Rd 
Continue to start location 
Cyclists hang out a LeBuzz Café – in the plaza', 'jacobk','2021-2-27 1:19','2021-2-27 1:19');


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

