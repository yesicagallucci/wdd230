const pass1 = document.querySelector("#pass");
const pass2 = document.querySelector("#rpass");
const message = document.querySelector("#formmessage");

pass2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (pass1.value !== pass2.value) {
		message.textContent = "Password DO NOT MATCH!";
		message.style.visibility = "show";
		pass2.style.backgroundColor = "#fff0f3";
		pass2.value = "";
		pass2.focus();
	} else {
		message.style.display = "none";
		pass2.style.backgroundColor = "#fff";
		pass2.style.color = "#000";
	}
}
