const baseURL = "https://yesicagallucci.github.io/wdd230/";
const linksURL = "https://yesicagallucci.github.io/wdd230/data/links.json";
async function getLinks(){
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data.lessons);
}
const displayLinks = (lessons) => {
    lessons.forEach((lesson) => {
        let card = document.createElement('ul');
        let week = document.createElement('li');
        let description = document.createElement('a');

        
        week.textContent = `${lesson.lesson}`;
        description.textContent = `${lesson.url} ${lesson.title}`;
        
        card.appendChild(week);
        card.appendChild(description);

        linksURL.appendChild(card);
        
        
    });
}

getLinks();