![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)

# roadroutes  

## Table of Contents
* [Description](#description)
* [Webpage-Images](#webpage-images)
* [Installation](#installation)
* [Usage](#usage)
* [Technologies-Used](#technologies-used)
* [Deployed-Link](#deployed-link)
* [Credits and Contact](#credits-and-Contact) 


## Description 

Road cycling enthusiast often seek variety in cycling routes to stave off boredom, help build endurance, and improve cadence.  The safest road routes are ones most traveled – drivers in the area typically expect cyclists and the routes are usually hassle-free. 

ROADROUTES allows riders to post favorite routes to a shared database and to search and save routes they would like to ride – in their town or in other cities across the US. 


## Webpage-Images

### Mobile Screenshots
![Screenshot of mobile webpage](https://github.com/tiffcrockett/roadroutes/blob/dev/public/images/rdrte-signup.png)
![Screenshot of mobile webpage](https://github.com/tiffcrockett/roadroutes/blob/tiff10/public/images/rdrte-loginpg.png)

### Desktop Screenshot
![Screenshot of desktop webpage](https://github.com/tiffcrockett/roadroutes/blob/dev/public/images/rdrte-addrtepg.png)

## Installation

No prior installation is required to properly use roadroutes. Simply head to the Deployed Link included towards the bottom of this README.

## Usage

1. Create an account with ROADROUTES and navigate the application using the navbar icons. 
2. Loging into user account navigates to the Members page, which lists Your Saved Routes. This page is located with the HOME icon. ![Navbar icons](https://github.com/tiffcrockett/roadroutes/blob/dev/public/images/rdrte-navicons.png)
3. To add routes to Your Saved Routes, click the SEARCH icon to navigate to the All-Routes page.
4. The All-Routes page lists all routes in the database and can be viewed by City and State. You can further SORT by route distance ascending or descending.  
5. Each route is shown in a summary format that includes route name, distance, area of town, city, state, and profile name of route author.
6. To view the route details and directions, click the Route Name shown on the summary. 
7. Navigate BACK. Click SAVE button to add the route to Your Saved Routes.
8. To share a favorite route by adding it to the All-Routes list, click [+] ADD icon to navigate to the Add-Route page.
9. Enter route information on the Add-Route page and SAVE. 
10. Click on the User-cog icon to navigate to the Settings page. There opt to receive an email notification when new routes are posted in your city.
11. Click the {=> logout icon to exit the ROADROUTES app.

## Technologies-Used

* bcryptjs
* express
* express-session
* mysql
* mysql2
* nodemailer
* passport
* passport-local
* sequelize

## Deployed-Link

https://roadroutes.herokuapp.com/

## Credits-and-Contact

* [Brandon Dana](https://github.com/Brando2147/) - brando2147@gmail.com
* [Jacob Kriese](https://github.com/jkriese12/) - jkriese12@gmail.com
* [Tiffany Crockett](https://github.com/tiffcrockett) - crockett.tiff@gmail.com
