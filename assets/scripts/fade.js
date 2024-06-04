var menu = document.getElementsByClassName('menu')[2];
var layout = document.getElementsByClassName('Layout')[0];
var top = document.getElementsByClassName('VPLocalNavOutlineDropdown')[0];
var button2 = document.getElementsByClassName('button')[1];
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

top.addEventListener('click', () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
});

button2.addEventListener('click', () => {
	button2.setAttribute('aria-expanded', 'true');
});

function fadeout()
{
	document.getElementsByClassName('VPBackdrop backdrop')[0].remove();
	//document.body.removeAttribute('style');
	menu.setAttribute('aria-expanded', 'false');
	document.getElementsByTagName('aside')[0].setAttribute('class', "VPSidebar");
}

var expanded = false;

hamburger.addEventListener('click', () => {
	if(!expanded) {
		expanded = true;
		hamburger.setAttribute('aria-expanded', 'true');
		hamburger.setAttribute('class', 'VPNavBarHamburger active hamburger');
		vpnav.insertAdjacentHTML(
		'afterbegin',
		`
		<div data-v-57cce842="" data-v-7ad780c2="" class="VPNavScreen" id="VPNavScreen">
			<div data-v-57cce842="" class="container">
				<div data-v-41505286="" data-v-57cce842="" class="VPNavScreenTranslations translations">
					<button data-v-41505286="" class="title">
						<svg data-v-41505286="" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="icon lang">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path
								d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "
								class="css-c4d79v"
							></path>
						</svg>
						Русский
						<svg data-v-41505286="" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="icon chevron">
							<path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"></path>
						</svg>
					</button>
					<ul data-v-41505286="" class="list">
						<li data-v-41505286="" class="item"><a data-v-41505286="" class="VPLink link link" href="/en/">English</a></li>
					</ul>
				</div>
				<div data-v-0dc5cf49="" data-v-57cce842="" class="VPNavScreenAppearance appearance">
					<p data-v-0dc5cf49="" class="text">Тёмная тема</p>
					<button data-v-1c29e291="" data-v-3329432d="" data-v-0dc5cf49="" class="VPSwitch VPSwitchAppearance" type="button" role="switch" title="toggle dark mode" aria-checked="true">
						<span data-v-1c29e291="" class="check">
							<span data-v-1c29e291="" class="icon">
								<svg data-v-3329432d="" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="sun">
									<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path>
									<path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path>
									<path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path>
									<path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path>
									<path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path>
									<path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path>
									<path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
									<path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path>
									<path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>
								</svg>
								<svg data-v-3329432d="" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="moon">
									<path
										d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"
									></path>
								</svg>
							</span>
						</span>
					</button>
				</div>
				<div data-v-e71e869c="" data-v-57cce842="" class="VPSocialLinks VPNavScreenSocialLinks social-links">
					<a class='VPSocialLink no-icon' href='https://kabochan.blog.jp/' target='_blank' rel='noopener' data-v-e71e869c='' data-v-16cf740a=''>
					  <img src="../assets/icons/ico_kabo.png" width="24" height="24"/>
					</a>
				</div>
			</div>
		</div>
		`);
	}
	else {
		expanded = false;
		hamburger.setAttribute('aria-expanded', 'false');
		hamburger.setAttribute('class', 'VPNavBarHamburger hamburger');
		document.getElementsByClassName('VPNavScreen')[0].remove();
	}
});