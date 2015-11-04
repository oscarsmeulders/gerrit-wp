jQuery(document).ready(function($){

	////////////////////////////////////////////////////////////////////////////////////
	///// isotope stuff

	var $win = $(window),
		$imgs = $('img.ll'),
		$con = $('.items');

	function loadVisible($els, trigger) {
		$els.filter(function () {
			var rect = this.getBoundingClientRect();
			return rect.top >= 0 && rect.top <= window.innerHeight;
		}).trigger(trigger);
	}

	$win.on('scroll', function () {
		loadVisible($imgs, 'lazylazy');
	});

	$imgs.lazyload({
		effect: "fadeIn",
		failure_limit: Math.max($imgs.length - 1, 0),
		event: 'lazylazy'
	});
	//
	////////////////////////////////////////////////////////////////////////////////////
	// filter items on button click
	$('.filters').on( 'click', 'button', function() {

		var filterValue = $(this).attr('data-filter');
		changeClasses( $(this) );

		window.location.hash = filterValue;

		isotopeFilter(filterValue);

		$('html, body').animate({ scrollTop: 0 }, 'fast');
	});
	//
	////////////////////////////////////////////////////////////////////////////////////
	// Change classes of filter buttons
	//
	changeClasses = function (who) {
		if ( $( who ).attr('id') == 'filter-showall') {
			if ( $(who).hasClass('hidden')) {
				$(who).removeClass('hidden');
			} else {
				$(who).addClass('hidden').delay(200).queue(function(next){
					$(who).addClass('displayNone').dequeue();
					});
			}
		} else {
			$('#filter-showall').removeClass('hidden displayNone');
		}
		$('.filters button').removeClass('active');
		$(who).addClass('active');
	}
	////////////////////////////////////////////////////////////////////////////////////
	var colWidth = function () {
		var w = $con.width(),
			columnNum = 1,
			columnWidth = 0;
		if (w > 1500) {
			columnNum  = 6;
		} else if (w > 1200) {
			columnNum  = 5;
		} else if (w > 900) {
			columnNum  = 4;
		} else if (w > 600) {
			columnNum  = 3;
		} else if (w > 300) {
			columnNum  = 2;
		}
		columnWidth = Math.floor(w/columnNum);
		$con.find('.item').each(function() {
			var $item = $(this),
				multiplier_w = $item.attr('class').match(/item-w(\d)/),
				multiplier_h = $item.attr('class').match(/item-h(\d)/),
				width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
				height = multiplier_h ? columnWidth*multiplier_h[1]*0.66666 : columnWidth*0.66666;
			$item.css({
				width: width,
				height: height
			});
		});
		return columnWidth;
	};


	isotope = function () {
		$con.isotope({
			itemSelector: '.item',
			masonry: {
				columnWidth: colWidth()
			}
		});
	};
	isotopeFilter = function(hash) {
		console.log('isotope filter : ' + hash);
		$con.isotope({ filter: hash });
	}


	hash = window.location.hash.substr(1);
	isotope();
	if (hash) {
		console.log ('hash : ' + hash);
		isotopeFilter(hash);

		$('.filters').find('button').each(function() {
			if ($(this).attr('data-filter') == hash) {
				changeClasses( $(this) );
			}
		});


	}

	$win.on('debouncedresize', isotope);


	$con.isotope('on', 'layoutComplete', function () {
		loadVisible($imgs, 'lazylazy');
	});

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// fade in random all items
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	function Shuffle(o) {
		for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};

	var portfolioFades = [];
	$con.find('.item').each(function() { portfolioFades.push($(this)) });

	Shuffle(portfolioFades);

	for (var i=0;i < portfolioFades.length;i++) {
		var $dly = i*50;
		portfolioFades[i].delay($dly).queue(function(next){
			$(this).addClass('loaded').dequeue();
		});
	}





});