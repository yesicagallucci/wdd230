const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidity = document.querySelector('#humidity');
const feels = document.querySelector('#st');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-25.39&lon=-57.14&units=metric&appid=316a701b8d48da6cd840afd85283a540';

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
    currentTemp.innerHTML = `${(data.main.temp.toFixed(1))}&degC`;
    humidity.innerHTML = `${data.main.humidity}%`;
    feels.innerHTML = `${data.main.feels_like}&degC`;
    windspeed.textContent = `${currentWeatherData.wind.speed} m/s`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

}

apiFetch();