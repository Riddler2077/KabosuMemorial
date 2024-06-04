//Переключатель языка
var button = document.getElementsByClassName('button')[0];

button.addEventListener("mouseover", function() {
	button.setAttribute('aria-expanded', 'true');
});