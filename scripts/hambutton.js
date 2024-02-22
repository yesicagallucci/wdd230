const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

function toggleMenuVisibility() {
	let menu = document.querySelector('.navigation');
	menu.classList.toggle('show');
  }
  
  let menuButton = document.querySelector('#menu');
  menuButton.addEventListener('click', toggleMenuVisibility);
  