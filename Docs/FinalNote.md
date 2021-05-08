# Team Members
- [Christian Kheav](https://github.com/ckheav)
- [Oluwakorede Noren](https://github.com/M-Noren)
- [Chika Chuku](https://github.com/cheekmsss)
- [Jared Brock](https://github.com/jb109)
- [Humdan Ahmed](https://github.com/Humdan1)

## Information problem
Weather is an ever changing aspect of the world and wanting to compare different regions is difficult to do with current websites like weather.com. To address this we developed a weather sites that allows the users to view two regions in detail on things like temperature humidity, wind speeds, pressure, and precipitation. Our website draws data from our MySQL database that was constructed in INST 327 called weather_db, this will also allows users to insert new data points if the region they wanted to see is not currently being displayed.

## Stakeholder
The stakeholders for this problem would be travelers who are interested in finding out weather conditions in a given region during a particular time period. These individuals would also likely be comparing the weather conditions of regions during a specified date.

## Proposed Solution
The application we are creating will allow users to use organized information in text and visual form to help prepare themselves when planning for the future. Users are currently getting a small and slow stream of information from the weather programs present today. This program will allow the user to modulate the amount and types of information they are getting. With the increasing ease of transportation to further destinations and accessibility to the masses, our target audience is much larger and they require more detailed information to make better decisions when it comes to logistics. Specifically, the user will be able to compare two or more destinations on different metrics. 

What didn’t work and we still learned from-
One obstacle we faced was connecting to the database from the backend with js.
We were unable to configure the programming to crud the date/time variable.
Finally, with the front end, we had trouble trying to get certain items to align where we wanted exactly. 

## Technology Stack
Our team used Node.js to connect our MySQL database that contains our weather data to manipulate our data within the database by creating, updating, retrieving, and deleting our data. We then designed a back-end API that will translate data from the database to our application. We also used Vanilla JS to craft the front end-web application connection that allowed the  users to search the database and compare regions using HTML/CSS.

## Challenges
We had many minor semantic issues where the logic was correct but it was not following what we needed it to do these issues include the backend connection towards a specfic data point on a table on the database 

## Future Work
If we were actually seeing success and were able to manage sprints with updates to the application, we would:
- Update the user interface to allow for greater choice and user input
- Allow for people to use the application worldwide, requires collecting data on major cities around the world
- Allow for saved results
- Allow people to open metadata for more depth on results
- Date comparison from a specfic date 
