const baseURL = "https://yesicagallucci.github.io/wdd230";
const dataURL = "https://yesicagallucci.github.io/wdd230/chamber/data/directory.json";
const members = document.querySelector('#members');

async function getMembers(){
    const response = await fetch(dataURL);
    const data = await response.json();
    //console.log(data);

    displayMembers(data.companies);
}

const displayMembers = (companies) => {
    companies.forEach(company => {
        //creating the html elements
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let brand = document.createElement('h3');
        let list = document.createElement('ul');
        let listItem1 = document.createElement('li');
        let listItem2 = document.createElement('li');
        let listItem3 = document.createElement('li');
        let url = document.createElement('a');

        //connect the content of the json file to each html element above
        card.setAttribute('class', 'member');
        logo.setAttribute('src', company.image);
        logo.setAttribute('alt', `logo of ${company.name}`);
        logo.setAttribute('class', 'member-logo');
        logo.setAttribute('loading', 'lazy');
        brand.textContent = `${company.name}`;
        list.setAttribute('class', 'info');
        listItem1.textContent = `${company.address}`;
        listItem2.textContent = `${company.phone}`;
        listItem3.textContent = `Membership level: ${company.membership_level}`;
        url.textContent = 'Website';
        url.setAttribute('href', company.website);
        url.setAttribute('target', '_blank');

        //append (adjuntar) each parent with its child element
        card.appendChild(logo);
        card.appendChild(brand);
        card.appendChild(list);
        list.appendChild(listItem1);
        list.appendChild(listItem2);
        list.appendChild(listItem3);
        card.appendChild(url);

        members.appendChild(card);        
        
    });
}

getMembers();

