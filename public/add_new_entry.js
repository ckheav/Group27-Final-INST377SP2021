async function printData() {
  const endpoint4 = '/api/regions';
  const request4 = await fetch(endpoint4);
  const Regions = await request4.json();

  console.log(Regions);
}

async function windowActions() {
  console.log('loaded window');

  const form = document.querySelector('#Submission');
  const city = document.querySelector('#City');
  const state = document.querySelector('#State');
  const zipcode = document.querySelector('#Zipcode');

  form.addEventListener('submit', async(event) => {
    event.preventDefault();
    console.info('submitted form', event.target);
    console.info('submitted form', event.target);

    const post = await fetch('/api/regions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ city: city.value, state: state.value, zip_code: zipcode.value})
    });
  });
}



printData();
window.onload = windowActions;