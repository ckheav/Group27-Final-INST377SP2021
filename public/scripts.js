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

}
dataHandler();