const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
function toggleMenuVisibility() {
	var menu = document.querySelector('.navigation');
	menu.classList.toggle('show');
  }
  
  var menuButton = document.querySelector('#menu');
  menuButton.addEventListener('click', toggleMenuVisibility);
  