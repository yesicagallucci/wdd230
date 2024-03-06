const baseURL = "https://yesicagallucci.github.io/wdd230/";
const linksURL = "https://yesicagallucci.github.io/wdd230/data/links.json";
const lessons = document.querySelector('#json');

async function getLinks(){
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data.lessons);
}
const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        
        let lesson = document.createElement('li');
        let description = document.createElement('a');

        
        week.textContent = `${lesson.lesson}`;
        description.textContent = `${lesson.url} ${lesson.title}`;
        
      
        lesson.appendChild(description);

        lessons.appendChild(lesson);
        
        
    });
}

getLinks();