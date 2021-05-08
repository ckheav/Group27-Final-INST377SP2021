async function dataHandler() {
  const endpoint1 = '/api/weather_p';
  const request1 = await fetch(endpoint1);
  const WeatherPrimary = await request1.json();

  const endpoint2 = '/api/weather_secondary';
  const request2 = await fetch(endpoint2);
  const WeatherSecondary = await request2.json();

  const endpoint3 = '/api/sea_info';
  const request3 = await fetch(endpoint3);
  const SeaInfo = await request3.json();

  const endpoint4 = '/api/regions';
  const request4 = await fetch(endpoint4);
  const Regions = await request4.json();

  const endpoint5 = '/api/celestial_phases';
  const request5 = await fetch(endpoint5);
  const CelestialPhases = await request5.json();

  console.log(WeatherPrimary);
  console.log(WeatherSecondary);
  console.log(SeaInfo);
  console.log(Regions);
  console.log(CelestialPhases);

  const userInput = document.querySelector('#Location1');
  const userInput2 = document.querySelector('#Location2');

  function findMatches(wordToMatch, regions) {
    return regions.filter((region) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return region.city.match(regex);
    });
  }

  function displayMatches(word, tableName) {
    const match = findMatches(word, Regions);
    const regionId = (match[0].region_id);

    // Get WeatherPrimary data
    const weatherP = [];
    for (i = 0; i < WeatherPrimary.data.length; i += 1) {
      if (WeatherPrimary.data[i].region_id === regionId) {
        weatherP.push(WeatherPrimary.data[i]);
      }
    }
    // Get WeatherSecondary data
    const weatherS = [];
    weatherP.forEach((entry) => weatherS.push(WeatherSecondary.data[entry.weather_secondary_id]))

    console.log(weatherP);
    console.log(weatherS);

    // Get CelestialPhases data
    const celestial = [];
    weatherP.forEach((entry) => celestial.push(CelestialPhases.data[entry.weather_primary_id]))

    // Get CelestialPhases data
    const seas = [];
    weatherP.forEach((entry) => seas.push(SeaInfo.data[entry.weather_primary_id]))

    console.log(weatherP);
    console.log(weatherS);
    console.log(celestial);
    console.log(seas);

    // Load data into table1
    for (i = 0; i < weatherP.length; i += 1) {
      const table = document.getElementById(tableName);
      const row = table.insertRow();

      const temp = row.insertCell(0);
      temp.innerHTML = weatherP[i].temperature;

      const humidity = row.insertCell(1);
      humidity.innerHTML = weatherP[i].humidity;

      const date = row.insertCell(2);
      date.innerHTML = weatherP[i].date;

      const precipitation = row.insertCell(3);
      precipitation.innerHTML = weatherS[i].precipitation_in;

      const moontype = row.insertCell(4);
      moontype.innerHTML = celestial[i].moon_type;

      const tide = row.insertCell(5);
      tide.innerHTML = seas[i].full_tide_present;
    }
  }

  const form = document.querySelector('#Compare');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query1 = userInput.value;
    const query2 = userInput2.value;

    console.log(query1);
    console.log(query2);

    document.getElementById("title1").innerHTML = query1;
    document.getElementById("title2").innerHTML = query2;


    displayMatches(query1, 'loc1');
    displayMatches(query2, 'loc2');
  });
}

dataHandler();