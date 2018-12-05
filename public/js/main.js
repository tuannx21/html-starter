(function() {
  'use strict';
  $(document).ready(function() {
    $('.slick-carousel').slick({
      slidesToShow: 4,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2e3,
      variableWidth: true
    });
  });
  $(document).ready(function() {
    $('.slick-carousel-more-info').slick({
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 2e3,
      variableWidth: true
    });
  });
  var x = Array.prototype.slice.call(document.querySelectorAll('.line'));
  x.forEach(function(a) {
    a.addEventListener('mouseover', function() {
      document.querySelector('#' + a.dataset.target).classList.add('active');
    });
    a.addEventListener('mouseout', function() {
      document.querySelector('#' + a.dataset.target).classList.remove('active');
    });
  });
})();