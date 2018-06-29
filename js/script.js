// to create carousel
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// button reset

var flkty = new Flickity( '.main-carousel', {
  groupCells: true
});

var button = document.querySelectorAll('.button');
button = fizzyUIUtils.makeArray( button );

button.addEventListener( 'click', function( event ) {
  // filter for button clicks
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var index = button.indexOf( event.target );
  flkty.selectCell( index );
});

// progress bar

var flkty = new Flickity('.main-carousel');

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});
