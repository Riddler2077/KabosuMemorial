var url = window.location.href.split('/');
var item = url[url.length - 1].split('.')[0];

switch(item) {
	
	case 'index':
		var elem = document.querySelectorAll('[href="index.html"]')[1].firstElementChild;
		elem.setAttribute('style', 'color:var(--vp-c-brand-1);');
		break;
	
	case 'origin':
		var elem = document.querySelectorAll('[href="origin.html"]')[0].firstElementChild;
		elem.setAttribute('style', 'color:var(--vp-c-brand-1);');
		break;
		
	case 'charity':
		var elem = document.querySelectorAll('[href="charity.html"]')[0].firstElementChild;
		elem.setAttribute('style', 'color:var(--vp-c-brand-1);');
		break;
	
	case 'popularity':
		var elem = document.querySelectorAll('[href="popularity.html"]')[0].firstElementChild;
		elem.setAttribute('style', 'color:var(--vp-c-brand-1);');
		break;

	case 'cryptocurrency':
		var elem = document.querySelectorAll('[href="cryptocurrency.html"]')[0].firstElementChild;
		elem.setAttribute('style', 'color:var(--vp-c-brand-1);');
		break;
		
	case 'used':
		var elem = document.querySelectorAll('[href="used.html"]')[0].firstElementChild;
		elem.setAttribute('style', 'color:var(--vp-c-brand-1);');
		break;
			
	case 'lastyears':
		var elem = document.querySelectorAll('[href="lastyears.html"]')[0].firstElementChild;
		elem.setAttribute('style', 'color:var(--vp-c-brand-1);');
		break;
		
	case 'farewell':
		var elem = document.querySelectorAll('[href="farewell.html"]')[0].firstElementChild;
		elem.setAttribute('style', 'color:var(--vp-c-brand-1);');
		break;
		
	default:
		console.log('unknown page!');
		break;
}