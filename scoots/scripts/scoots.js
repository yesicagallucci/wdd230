/*HAMBURGER MENU*/

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

/*DARK MODE*/

const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
//const header = document.querySelector("h1");
//const titles = 

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌆")) {
        body.style.background = "#000";
        body.style.color = "#fff";

        modeButton.textContent = "🌇";

    } else {
        body.style.background = "#fff";
        body.style.color = "#000";

        modeButton.textContent = "🌆";
    }
});

/*LAST MODIFIED*/

let lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last modification: " + lastModified;

document.getElementById("year").innerHTML = new Date().getFullYear();

/*TABLE FOR RENTAL PRICING AND FETCHING JSON*/

const table = document.querySelector('#pricing tbody');
const url = "https://yesicagallucci.github.io/wdd230/scoots/data/prices.json";


async function getPricesData(){
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayPrices(data.prices);
        }else {
            throw new Error('Failed to fetch prices');
        }
    } catch (error) {
        console.log('error fetching prices:', error);
    }    
}

const displayPrices = (prices) => {
    prices.forEach((price) =>{
        let row = document.createElement('tr');
        let type = document.createElement('td');
        let max = document.createElement('td');
        let rHalfDay = document.createElement('td');
        let rFullDay = document.createElement('td');
        let wHalfDay = document.createElement('td');
        let wFullDay = document.createElement('td');
        
        type.textContent = `${price.rentaltype}`;
        max.textContent = `${price.max-persons}`;
        rHalfDay = `${price.reservation.halfday}`;
        rFullDay = `${price.reservation.fullday}`;
        wHalfDay = `${price.walk-in.halfday}`;
        wFullDay = `${price.walk-in.fullday}`;

    })

}

getPricesData();
