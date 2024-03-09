const baseURL = "https://yesicagallucci.github.io/wdd230/";
const dataURL = "https://yesicagallucci.github.io/wdd230/chamber/data/directory.json";
const members = document.querySelector('#members');

async function getMembers() {
    const response = await fetch(dataURL);
    const data = await response.json();
    console.log(data);

    //displayMembers(data.lessons);
}

getMembers();

