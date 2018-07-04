(function() { 

'use strict';

//carousel
var flkty = new Flickity('.main-carousel', {
	pageDots: false, 
	wrapAround: true,
	cellAlign: "left",
	contain: true
});

// progress bar
var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});


})(); 