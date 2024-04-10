
/*TABLE FOR RENTAL PRICING AND FETCHING JSON*/

const table = document.querySelector('#pricing');
const url = "https://yesicagallucci.github.io/wdd230/scoots/data/prices.json";

document.addEventListener('DOMContentLoaded', function() {
    getPricesData();
});

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
        max.textContent = `${price.maxpersons}`;
        rHalfDay.textContent = `$${price.reservation[0].halfday}`;
        rFullDay.textContent = `$${price.reservation[0].fullday}`;
        wHalfDay.textContent = `$${price.walkin[0].halfday}`;
        wFullDay.textContent = `$${price.walkin[0].fullday}`;

        row.appendChild(type);
        row.appendChild(max);
        row.appendChild(rHalfDay);
        row.appendChild(rFullDay);
        row.appendChild(wHalfDay);
        row.appendChild(wFullDay);

        table.appendChild(row);

    });

}

//getPricesData();

