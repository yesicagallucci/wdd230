const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const titles = document.querySelectorAll("h2");
const header = document.querySelector("h1");
const labels = document.querySelectorAll("label");
const legends = document.querySelectorAll("legend");


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		body.style.background = "#000";
		body.style.color = "#fff";
		header.style.color = "#fff";
		titles.forEach(title => {
			title.style.color = "#fff";
		});
		labels.forEach(label => {
			label.style.color = "#fff";
		});
		legends.forEach(legend => {
			legend.style.color = "#fff";
		});
		modeButton.textContent = "🔆";
	} else {
		body.style.background = "#fff";
		body.style.color = "#000";
		header.style.color = "##34568f";
		titles.forEach(title => {
			title.style.color = "#34568f";
		});
		labels.forEach(label => {
			label.style.color = "#000";
		});
		legends.forEach(legend => {
			legend.style.color = "#34568f";
		});
		modeButton.textContent = "🕶️";
	}
});