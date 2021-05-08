# Weather Vane
## INST 377 Group 27 Final Project

## Project Description
Weather is an ever changing aspect of the world and wanting to compare different regions is difficult to do with current websites like weather.com. To address this we developed a weather sites that allows the users to view two regions in detail on things like temperature humidity, wind speeds, pressure, and precipitation. Our website draws data from our MySQL database that was constructed in INST 327 called weather_db, this will also allows users to insert new data points if the region they wanted to see is not currently being displayed.

## Link to the Heroku instance Website for Weather Vane
- [Heroku](https://polar-anchorage-73490.herokuapp.com/)

## Target browsers
- Windows PCs (1920X1080)
- iPhone 6/7/& 8 
- Macbook 15 (2017)

## Links
- [User Manual](https://github.com/ckheav/Group27-Final-INST377SP2021/blob/main/Docs/UserManual.md)
- [Developer Manual](https://github.com/ckheav/Group27-Final-INST377SP2021/blob/main/Docs/DeveloperManual.md)

# Developer Manual
## How to install application and all dependencies
1. Clone this repository through Github Desktop or through Terminal.
2. Open repository in VSCode Terminal or Terminal application.
3. type ```npm install``` into terminal window and run.
4. The application should now be set to use.

## How to run application on a server
1. Open repository in VSCode terminal or Terminal application.
2. Run ```npm start```. There should be no errors.
3. In a web browser, go to url: ```http://localhost:3000/```.

## To run tests for software
The are no prewritten tests in the source repository, but you can use Cypress to run your own written tests.
1. Open two terminals and make sure you are in the main project directory
2. In the first terminal, run ```npm start```.
3. In the second terminal run ```npm test```.

## Server application APIs
```/api``` - API route for entire the weather_db.
* GET - Logs to console response query from . returns response 'Got a GET request from /api'.
* POST - obtains course name from request body to fetch url. fetch data json from  and returns JSON response. 
* PUT - returns response 'Got a PUT request at /api'.

```/weather_p``` - API route for weather primary table.
* GET - Logs to console response query from the HTML form. returns response 'Got a GET request from /api/weather_p'.
* POST - obtains course name from request body to fetch url. fetch data json from  and returns JSON response. 
* PUT - returns response 'Got a PUT request at /api'.

```/weather_secondary``` - API route for weather.
* GET - Logs to console response query from URL. returns response 'Got a GET request from /api'.
* POST - obtains professor name from request body to fetch url. fetch data json from PlanetTerp professors API and returns JSON response. 
* PUT - returns response 'Got a PUT request at /api'.

 ```/celestial_phases``` - API route for professor reviews data.
* GET - Logs to console response query from URL. returns response 'Got a GET request from /api'.
* POST - obtains professor name from request body to fetch url. fetch data json from PlanetTerp professors API and returns JSON response. 
* PUT - returns response 'Got a PUT request at /api'.

```/regions``` - API route for professor reviews data.
* GET - Logs to console response query from URL. returns response 'Got a GET request from /api'.
* POST - obtains professor name from request body to fetch url. fetch data json from PlanetTerp professors API and returns JSON response. 
* PUT - returns response 'Got a PUT request at /api'.

```/sea_info``` - API route for professor reviews data.
* GET - Logs to console response query from URL. returns response 'Got a GET request from /api'.
* POST - obtains professor name from request body to fetch url. fetch data json from PlanetTerp professors API and returns JSON response. 
* PUT - returns response 'Got a PUT request at /api'.

## Known Bugs and Future Development
### Bugs: 
- - In Compare Weather and Climate the user must input two desire locations if one is left empty two tables will be shown but one with the incorrect data points other wise the logic will try to follow through, in the future we hope that the tables will be filled with more recent data but currently we only have about 1 years worth.
- Currently the city location tag, future development enabling state to be searched as well 
- Another small bug is with the layout of the tables and compare button and how it is only centered when the browers is full screen 


# Team Members
- [Christian Kheav](https://github.com/ckheav)
- [Oluwakorede Noren](https://github.com/M-Noren)
- [Chika Chuku](https://github.com/cheekmsss)
- [Jared Brock](https://github.com/jb109)
- [Humdan Ahmed](https://github.com/Humdan1)
