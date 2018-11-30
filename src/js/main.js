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

	$(document).ready(function () {
		$('.slick-carousel-more-info').slick({
			slidesToShow: 4,
			autoplay: true,
			autoplaySpeed: 2000,
			variableWidth: true,
		});
	});

	function mouseOverMapLink(image) {
    document.getElementsByClassName(image)[0].style.display = 'inline';
  }

  function mouseOutMapLink(image) {
    document.getElementsByClassName(image)[0].style.display = 'none';
	}
})();



