jQuery(document).ready(function($){

	////////////////////////////////////////////////
	var $gallery = $('.gallery').flickity({
		cellAlign: 'center',
		percentPosition: false,
		pageDots: false,
		wrapAround: true,
		imagesLoaded: true,
		setGallerySize: false,
		freeScroll: false,
		draggable: false,
		prevNextButtons: false,
		pageDots: false
	});
	$gallery.flickity().focus();

	////////////////////////////////////////////////
	// http://flickity.metafizzy.co/extras.html
	////////////////////////////////////////////////
	// previous
	$('.gallery-buttons .button-previous').on( 'click', function() {
		$gallery.flickity('previous');
	});
	// next
	$('.gallery-buttons .button-next').on( 'click', function() {
		$gallery.flickity('next');
	});
	////////////////////////////////////////////////


});