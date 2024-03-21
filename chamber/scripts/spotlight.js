const baseURL = "https://yesicagallucci.github.io/wdd230";
const dataURL = "https://yesicagallucci.github.io/wdd230/chamber/data/directory.json";
const partners = document.querySelector('#spotlight');

async function fetchPartners(){
    const response = await fetch(dataURL);
    const data = await response.json();
    //console.log(data);
    const goldAndSilverCompanies = filterGoldAndSilver(data.companies);
    const selectedCompanies = selectRandomCompanies(goldAndSilverCompanies, 3);
    displaySpotlight(selectedCompanies);
}

// Function to filter companies with membership levels Gold or Silver
function filterGoldAndSilver(companies) {
    return companies.filter(company => company.membership_level === "Gold" || company.membership_level === "Silver");
}

// Function to randomly select three companies
function selectRandomCompanies(companies, count) {
    const shuffled = companies.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}


const displaySpotlight = (companies) => {

    companies.forEach(company => {
        let member = document.createElement('section');
        let logo = document.createElement('img');
        let brand = document.createElement('h3');
        let url = document.createElement('a');
        
        member.setAttribute('class', 'member');
        logo.setAttribute('src', company.image);
        logo.setAttribute('class', 'member-logo')
        logo.setAttribute('alt', `logo of ${company.name}`);
        logo.setAttribute('loading', 'lazy');
        brand.textContent = `${company.name}`;
        url.textContent = `Website`;
        url.setAttribute('href', company.website);
        url.setAttribute('target', '_blank');

        member.appendChild(logo);
        member.appendChild(brand);
        member.appendChild(url);

        partners.appendChild(member);        
    });

   
}

fetchPartners();