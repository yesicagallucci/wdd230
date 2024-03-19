"use strict"
//Weather API for Temp, humidity, feels like, and wind speed
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidity = document.querySelector('#humidity');
const feels = document.querySelector('#st');
const wSpeed = document.querySelector('#speed');

const currentUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-25.39&lon=-57.14&units=metric&appid=a006a685e29db05954d8ed3428d9de43';


async function fetchCurrentWeather() {
   try {
       const response = await fetch(currentUrl);
       if (response.ok) {
           const data = await response.json();
           console.log(data); // Log the data to inspect its structure
           displayCurrentWeather(data);
           
       } else {
           throw new Error('Failed to fetch weather data');
       }
   } catch (error) {
       console.log('Error fetching weather data:', error);
   }
}

function displayCurrentWeather(data) {
   currentTemp.innerHTML = `${(data.main.temp.toFixed(1))}&degC`;
    humidity.innerHTML = `${data.main.humidity}%`;
    feels.innerHTML = `${data.main.feels_like}&degC`;
    wSpeed.innerHTML = `${data.wind.speed} m/s`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}


const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=-25.39&lon=-57.14&units=metric&appid=a006a685e29db05954d8ed3428d9de43';

async function fetchForecastWeather() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Log the data to inspect its structure
            displayForecastWeather(data);
        } else {
            throw new Error('Failed to fetch weather data');
        }
    } catch (error) {
        console.log('Error fetching weather data:', error);
    }
 }
 
 // Function to format date to display only the day of the week
 const formatDayOfWeek = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long' });
 };
 
 function displayForecastWeather(data) {
    try {
        // Extract forecast data from the response
        const forecastData = data.list; // Assuming the forecast data is in the 'list' property
        
        // Create an object to store forecast data grouped by date
        const forecastByDate = {};
 
        // Get tomorrow's date
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowDateString = tomorrow.toISOString().split('T')[0]; // Format as YYYY-MM-DD
 
        // Iterate over forecast data entries
        forecastData.forEach(entry => {
            // Extract date from the entry
            const date = entry.dt_txt.split(' ')[0]; // Extracting date from dt_txt (YYYY-MM-DD format)
 
            // Check if the date is tomorrow or later
            if (date >= tomorrowDateString) {
                // Check if forecastByDate already has an entry for this date
                if (!forecastByDate[date]) {
                    // If not, create a new entry
                    forecastByDate[date] = {
                        icon: entry.weather[0].icon, // Forecast weather icon code
                        description: entry.weather[0].description, // Forecast weather description
                        temp: entry.main.temp, // Forecast temperature
                        humidity: entry.main.humidity // Forecast humidity
                    };
                } else {
                    // If an entry for this date already exists, update the temperature and humidity
                    forecastByDate[date].temp = entry.main.temp;
                    forecastByDate[date].humidity = entry.main.humidity;
                }
            }
        });
 
        // Display forecast data on your website
        for (const date in forecastByDate) {
            // Create HTML elements dynamically to display forecast data
            const forecastElement = document.createElement('div');
            forecastElement.classList.add('forecast-day');
            const dayElement = document.createElement('h3');
            const iconElement = document.createElement('img');
            const descriptionElement = document.createElement('p');
            const tempElement = document.createElement('p');
            const humidityElement = document.createElement('p');
 
            dayElement.textContent = `${formatDayOfWeek(new Date(date))}`; // Format day of the week         
            iconElement.src = `https://openweathermap.org/img/wn/${forecastByDate[date].icon}.png`; // Weather icon URL
            iconElement.alt = forecastByDate[date].description;           
            descriptionElement.textContent = forecastByDate[date].description;         
            tempElement.textContent = `Temperature: ${forecastByDate[date].temp}°C`;           
            humidityElement.textContent = `Humidity: ${forecastByDate[date].humidity}%`;
           
            forecastElement.appendChild(dayElement);
            forecastElement.appendChild(iconElement);
            forecastElement.appendChild(descriptionElement);
            forecastElement.appendChild(tempElement);
            forecastElement.appendChild(humidityElement);
 
            // Append the forecast element to a forecast section in your HTML document
            document.getElementById('forecast-section').appendChild(forecastElement);
        }
    } catch (error) {
        console.error('Error displaying forecast weather:', error);
    }
 }
 
 // Call fetch functions to fetch weather data
 fetchForecastWeather();
 fetchCurrentWeather();

//Wind Chill calculation
function showWindChill() {
   let temperature = parseFloat(document.getElementById("temp").textContent);
   let windspeed = parseFloat(document.getElementById("speed").textContent);
   let windChillValue = "N/A";

   if (temperature <= 10 && windspeed > 4.82803) {
      windChillValue = calculateWindChill(temperature, windspeed);
  
   }
   document.getElementById("chill").textContent = windChillValue;

  }
  window.addEventListener('load', showWindChill);



  function calculateWindChill(temperature, windSpeed) {
   // Calculate wind chill using the formula for Celsius and km/h
   return (
       13.12 + 
       0.6215 * temperature - 
       11.37 * Math.pow(windSpeed, 0.16) + 
       0.3965 * temperature * Math.pow(windSpeed, 0.16)
   ).toFixed(2); // Round off to two decimal places
}

        
     