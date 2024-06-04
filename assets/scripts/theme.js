//Переключатель темы
var button = document.getElementsByClassName('VPSwitch VPSwitchAppearance')[0];

button.addEventListener('click', () => {
	if (!document.documentElement.classList.contains('dark')) {
		document.documentElement.classList.add('dark');
		button.setAttribute('aria-checked', 'false');
		button.setAttribute('title', 'toggle light mode');
		localStorage.setItem('theme', 'dark');
	} 
	else {
		document.documentElement.classList.remove('dark');
		button.setAttribute('aria-checked', 'true');
		button.setAttribute('title', 'toggle dark mode');
		localStorage.setItem('theme', 'light');
	}
});

var appearance = document.getElementsByClassName('item appearance')[0];

appearance.addEventListener('click', () => {
	if (!document.documentElement.classList.contains('dark')) {
		document.documentElement.classList.add('dark');
		button.setAttribute('aria-checked', 'false');
		button.setAttribute('title', 'toggle light mode');
		localStorage.setItem('theme', 'dark');
	} 
	else {
		document.documentElement.classList.remove('dark');
		button.setAttribute('aria-checked', 'true');
		button.setAttribute('title', 'toggle dark mode');
		localStorage.setItem('theme', 'light');
	}
});