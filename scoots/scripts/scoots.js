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




