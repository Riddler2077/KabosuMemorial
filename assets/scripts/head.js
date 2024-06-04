//Если в хранилище темы нет - взять из системной темы
if(localStorage.getItem('theme') == undefined) {
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		// dark mode
		document.documentElement.classList.add('dark');
		localStorage.setItem('theme', 'dark');
	}
	else {
		// light mode
		document.documentElement.classList.remove('dark');
		localStorage.setItem('light', 'dark');
	}
}
else {
	var theme = localStorage.getItem('theme');
	if(theme == 'dark') {
		// dark mode
		document.documentElement.classList.add('dark');
	}
	else {
		// light mode
		document.documentElement.classList.remove('dark');
	}
}