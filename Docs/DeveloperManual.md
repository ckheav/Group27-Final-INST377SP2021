# Developer Manual For Weather Vane

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
```/weather_p``` - API route for weather primary table.
* GET - obtains temperature, humidity, and date from  response query from the HTML form. returns response 'Got a GET request from /api/weather_p'.
* POST*- - creates new entry for weather_primary table. fetch data json from  and returns JSON response. 
* PUT - updates existing entry for weather primary table. returns response 'Successfully Updated'.

```/weather_secondary``` - API route for weather.
* GET - obtains precipitation from  response query from the HTML form.
* POST*- - creates new entry for weather_secondary table. fetch data json from  and returns JSON response. 
* PUT - updates existing entry for weather secondary table. returns response 'Successfully Updated'.

 ```/celestial_phases``` - API route for professor reviews data.
* GET - obtains moon type from  response query from the HTML form.
* POST*- - creates new entry for celestial_phases table. fetch data json from  and returns JSON response.
* PUT - updates existing entry for celestial phases table. returns response 'Successfully Updated'.

```/regions``` - API route for professor reviews data.
* GET - obtains city data from  response query from the HTML form.
* POST*- - creates new entry for regions table. fetch data json from  and returns JSON response. 
* PUT - updates existing entry for regions table. returns response 'Successfully Updated'.

```/sea_info``` - API route for professor reviews data.
* GET - obtains full tide present from  response query from the HTML form.
* POST*- - creates new entry for sea_info table. fetch data json from  and returns JSON response. 
* PUT - updates existing entry for sea_info table. returns response 'Successfully Updated'.

## Known Bugs and Future Development
### Bugs:
- In Compare Weather and Climate the user must input two desire locations if one is left empty two tables will be shown but one with the incorrect data points other wise the logic will try to follow through, in the future we hope that the tables will be filled with more recent data but currently we only have about 1 years worth.
- Currently the city location tag, future development enabling state to be searched as well 
- Another small bug is with the layout of the tables and compare button and how it is only centered when the browers is full screen 
