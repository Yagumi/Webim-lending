
	var menu = document.querySelector('.nav__list');
	var burger = document.querySelector('.burger');
	var buttonReg = document.querySelector('.main-header__registration-btn');
	burger.addEventListener('click', function() {
		if(menu.classList.contains('nav__list--open')) {
			menu.classList.remove('nav__list--open');
			menu.classList.add('nav__list--close');
			burger.classList.remove('burger--stand-up');
			buttonReg.classList.remove('main-header__registration-btn--open');
			buttonReg.classList.add('main-header__registration-btn--close');
		} else {
			menu.classList.remove('nav__list--close');
			menu.classList.add('nav__list--open');
			burger.classList.add('burger--stand-up');
			buttonReg.classList.remove('main-header__registration-btn--close');
			buttonReg.classList.add('main-header__registration-btn--open');
		}
	});


