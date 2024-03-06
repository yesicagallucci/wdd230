const baseURL = "https://yesicagallucci.github.io/wdd230/";
const linksURL = "https://yesicagallucci.github.io/wdd230/data/links.json";
async function getLinks(){
    const response = await fetch(baseURL);
    const data = await response.json();
}

getLinks();