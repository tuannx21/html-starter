(function () {
	'use strict';

	console.log('hello');

	$(document).ready(function () {
		$('.slick-carousel').slick({
			slidesToShow: 4,
			dots: true,
			autoplay: true,
			autoplaySpeed: 2000,
			variableWidth: true,
		});
	});
})();



