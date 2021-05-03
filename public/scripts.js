async function dataHandler() {
  const endpoint1 = '/api/weather_p';
  const request1 = await fetch(endpoint1);
  const SeaInfo = await request1.json();

  console.log(SeaInfo);
}
dataHandler();