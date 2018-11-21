(function() {
  'use strict';

	console.log('hello');
	
	var mySiema = new Siema({
	perPage: 4,
	loop: true
	});

	document.querySelector('.btn-prev').addEventListener('click',function(){mySiema.prev()});
	document.querySelector('.btn-next').addEventListener('click',function(){mySiema.next()});
	
})();



