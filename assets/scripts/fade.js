var menu = document.getElementsByClassName('menu')[2];
var layout = document.getElementsByClassName('Layout')[0];
var totop = document.getElementsByClassName('VPLocalNavOutlineDropdown')[0];
//var totop = document.evaluate("//button[contains(., 'Наверх')]", document, null, XPathResult.ANY_TYPE, null ).iterateNext();
var button4 = document.getElementsByClassName('button')[1];
var hamburger = document.getElementsByClassName('VPNavBarHamburger hamburger')[0];
//var hamburger = document.querySelectorAll('[aria-label="mobile navigation"]')[0];
var vpnav = document.getElementsByClassName('VPNav')[0];

menu.addEventListener('click', () => {
	layout.insertAdjacentHTML(
    'afterbegin',
    `<div data-v-54a304ca="" data-v-9d8abc1e="" class="VPBackdrop backdrop" onclick="fadeout()"></div>`);
	//document.body.setAttribute('style', 'overflow: hidden;');
	menu.setAttribute('aria-expanded', 'true');
	document.getElementsByTagName('aside')[0].setAttribute('class', "VPSidebar open");
});

function fadeout()
{
	document.getElementsByClassName('VPBackdrop backdrop')[0].remove();
	//document.body.removeAttribute('style');
	menu.setAttribute('aria-expanded', 'false');
	document.getElementsByTagName('aside')[0].setAttribute('class', "VPSidebar");
}

totop.addEventListener('click', () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
});

button4.addEventListener('click', () => {
	if(button4.getAttribute('aria-expanded') == 'true')
		button4.setAttribute('aria-expanded', 'false');
	else
		button4.setAttribute('aria-expanded', 'true');
});

var expanded = false;

hamburger.addEventListener('click', () => {
	if(!expanded) {
		expanded = true;
		hamburger.setAttribute('aria-expanded', 'true');
		hamburger.setAttribute('class', 'VPNavBarHamburger active hamburger');
		vpnav.getElementsByClassName('VPNavScreen')[0].removeAttribute('style');
	}
	else {
		expanded = false;
		hamburger.setAttribute('aria-expanded', 'false');
		hamburger.setAttribute('class', 'VPNavBarHamburger hamburger');
		vpnav.getElementsByClassName('VPNavScreen')[0].setAttribute('style', "display: none;");
	}
});

var opened = false;

var translations = document.getElementsByClassName('VPNavScreenTranslations translations')[0];
translations.addEventListener("click", function() {
	console.log('click');
	if(!opened)
	{
		opened = true;
		translations.setAttribute('class', 'VPNavScreenTranslations open translations');
	}
	else
	{
		opened = false;
		translations.setAttribute('class', 'VPNavScreenTranslations translations');
	}
});
