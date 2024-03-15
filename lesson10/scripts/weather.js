//In the weather.js file, first select all of the HTML elements that will need to be manipulated and assign them to const variables.
//Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidity = document.querySelector('#humidity');

//Declare a const variable named "url" and assign it a valid URL string as given in the openweathermap api documentation.
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=d9a4ee17e9a20d1de57d9a436cb2f0ab';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //testing only, uncomment when ready
            displayResults(data);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
   
}

function displayResults(data) {
    currentTemp.innerHTML = `${(data.main.temp.toFixed(0))}&deg;F`;
    humidity.innerHTML = `${data.main.humidity}%`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description.toUpperCase();
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}


apiFetch();

/*async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            const data = await response.json();
            displayResults(data);
        }
    } catch (error) {
        console.error("Fetch error: " + error.message);
    }
}
*/


