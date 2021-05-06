async function getData(){
    const request = await fetch('/api/regions');
    const json = await request.json();

    return json.data;
}
async function recordSubmission(){
    const form = document.querySelector('#recordSubmit');
    const city = document.querySelector('#cityName');

    form.addEventListener('submit', async(event) => {
        event.preventDefault();
        console.info('submitted form', event.target);
        
        const post = await fetch('/api/regions',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ city: name.value})
        });
    });
}

async function windowActions(){
    console.log('loaded window');
    const regions = await getData();
    console.table(regions);

    regions.forEach(hall =>{
        const button = document.createElement('button');
        button.innerText = 
    })
}

window.onload = windowActions;