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
    $('.slick-carousel-more-info').slick({
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 2e3,
      variableWidth: true
    });
  });
  var lineArray = Array.prototype.slice.call(document.querySelectorAll('.line'));
  lineArray.forEach(function(line) {
    line.addEventListener('mouseover', function() {
      document.querySelector('#' + line.dataset.target).classList.add('active');
    });
    line.addEventListener('mouseout', function() {
      document.querySelector('#' + line.dataset.target).classList.remove('active');
    });
  });
})();