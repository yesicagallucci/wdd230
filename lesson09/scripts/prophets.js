const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');
async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();

    //console.table(data.prophets);
    //Calling a function // note that we reference the prophets array of the JSON data object, not just the object
    displayProphets(data.prophets);
}

/*Define a function expression named "displayProphets" that handles a single parameter named "prophets" somewhere in your js file. Use an arrow expression to contain statements that will process the parameter value and build a card for each prophet.
Inside the function, use a forEach loop with the array parameter to process each "prophet" record one at a time, creating a new card each time.*/

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');
        let death = document.createElement('p');

        // Build the h2 content out to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`; 
    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
    death.textContent = `Date of Death: ${prophet.death}`;
    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name}${prophet.lastname}`);
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(fullName); 
    card.appendChild(portrait);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(death);
    

    cards.appendChild(card);


    });
}

getProphetData();