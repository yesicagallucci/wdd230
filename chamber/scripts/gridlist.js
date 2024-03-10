/*
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}*/


document.addEventListener("DOMContentLoaded", function() {
    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");
    const display = document.querySelector("article");

    function showGrid() {
      display.classList.add("grid");
      display.classList.remove("list");
    }

    function showList() {
      display.classList.add("list");
      display.classList.remove("grid");
    }

    gridButton.addEventListener("click", showGrid);
    listButton.addEventListener("click", showList);

    // Call the showGrid() function when the page loads
    showGrid();
  });