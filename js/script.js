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

// reset 
document.getElementById('reset').addEventListener('click', function() {
    flkty.select(0);
});


// navigation buttons
var anchors = document.querySelectorAll('.button-group a');

for (var i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', function(e) {
        var slideNumber = e.target.getAttribute('data-index');
        flkty.select(slideNumber);
    });
}

})(); 