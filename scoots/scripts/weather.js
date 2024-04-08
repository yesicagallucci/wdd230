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
const maxTempUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-20.49&lon=-86.93&units=imperial&appid=0394c5d13bca27654dbc3c0209423699';

async function apiFetch() {
    try {
        const response = await fetch(maxTempUrl);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
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
apiFetch();