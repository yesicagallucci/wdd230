/*WEATHER BANNER*/
document.addEventListener('DOMContentLoaded', function(){
    const weatherBanner = document.getElementById('banner');
    const closeBtn = document.getElementById('closeBtn');
    weatherBanner.style.display = 'block';

    closeBtn.addEventListener('click', function() {
        weatherBanner.style.display = 'none';
    });

});

//Current temp-max

let temp = document.querySelector('#max-temp');
const maxTempUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-20.45&lon=-86.91&units=imperial&appid=0394c5d13bca27654dbc3c0209423699';

async function apiFetch() {
    try {
        const response = await fetch(maxTempUrl);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
            displayCurrentWeather(data);
        }else {
            throw Error (await response.text());
        }
    }catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    temp.innerHTML = `Today's Max Temp is: ${data.main.temp_max}°F`;

}


/* WEATHER INFORMATION: CURRENT TEMPERATURE, HUMIDITY, NEXT DAYS FORECAST TEMP AT 15.00 + ALL THE WEATHER DATA POINTS PROVIDED INCLUDING THE MAIN*/

let weather = document.querySelector('#weather');
function displayCurrentWeather(data) {
    let figure = document.createElement('figure');
    let icon = document.createElement('img');
    let description = document.createElement('figcaption');
    let temp = document.createElement('p');
    //let feels = document.createElement('p');
    let humidity = document.createElement('p');

    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    icon.alt = `weather descriptive icon`;
    description.textContent = data.weather[0].description;
    temp.textContent = `Temp: ${(data.main.temp.toFixed(1))}°F`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    //feels.textContent = `Feels: ${data.main.feels_like}°F`;

    figure.appendChild(icon);
    figure.appendChild(description);
    weather.appendChild(figure);
    weather.appendChild(temp);
    //weather.appendChild(feels);
    weather.appendChild(humidity);
}

let forecast = document.querySelector('#forecast');
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=-20.44&lon=-86.91&units=imperial&appid=a006a685e29db05954d8ed3428d9de43';

async function fetchForecastWeather() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayForecastWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecastWeather (data){

    const forecastByDate = {};
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()
    )
    let figure = document.createElement('figure');
    let icon = document.createElement('img');
    let description = document.createElement('figcaption');
    let temp = document.createElement('p');
    let humidity = document.createElement('p');

    icon.src = `https://openweathermap.org/img/wn/${forecastByDate[date].icon}.png`;
    icon.alt = `weather descriptive icon`;
    description.textContent = data.weather[0].description;
    temp.textContent = `Temp: ${(data.main.temp.toFixed(1))}°F`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;


}

apiFetch();
fetchForecastWeather();