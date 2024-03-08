const baseURL = "https://yesicagallucci.github.io/wdd230/";
const linksURL = "https://yesicagallucci.github.io/wdd230/chamber/data/directory.json";
const members = document.querySelector('#members');

async function getMembers(){
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);

    //displayLinks(data.lessons);
}

getMembers();