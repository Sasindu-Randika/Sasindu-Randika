'use strict';

(function () {
	var navToggle = document.querySelector('.nav-toggle');
	var navList = document.getElementById('primary-menu');
	var yearSpan = document.getElementById('year');

	if (yearSpan) {
		yearSpan.textContent = String(new Date().getFullYear());
	}

	if (!navToggle || !navList) return;

	function closeMenu() {
		navList.classList.remove('open');
		navToggle.setAttribute('aria-expanded', 'false');
	}

	navToggle.addEventListener('click', function () {
		var isOpen = navList.classList.toggle('open');
		navToggle.setAttribute('aria-expanded', String(isOpen));
	});

	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape') {
			closeMenu();
		}
	});

	document.addEventListener('click', function (event) {
		if (!navList.contains(event.target) && !navToggle.contains(event.target)) {
			closeMenu();
		}
	});
})();