(function () {
	'use strict';

	console.log('hello');

	$(document).ready(function () {
		$('.slick-carousel').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			dots: true,
			autoplay: true,
			autoplaySpeed: 2000,
			responsive: [
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	});
})();



