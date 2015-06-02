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

	// filter items on button click
	$('.filters').on( 'click', 'button', function() {

		var filterValue = $(this).attr('data-filter');
		if ( $(this).attr('id') == 'filter-showall') {
			if ( $(this).hasClass('hidden')) {
				$(this).removeClass('hidden');
			} else {
				$(this).addClass('hidden');
			}
		} else {
			$('#filter-showall').removeClass('hidden');
		}

		$('.filters button').removeClass('active');
		$(this).addClass('active');

		$con.isotope({ filter: filterValue });
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		isotope();
	});


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
	isotope();

	$(window).on('debouncedresize', isotope);


	$con.isotope('on', 'layoutComplete', function () {
		loadVisible($imgs, 'lazylazy');
	});

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// fade random all items in...
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	function Shuffle(o) {
		for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};

	var portfolioFades = [];
	$con.find('.item').each(function() { portfolioFades.push($(this)) });

	Shuffle(portfolioFades);

	for (var i=0;i < portfolioFades.length;i++) {
		var $dly = i*150;
		portfolioFades[i].delay($dly).queue(function(next){
			$(this).addClass('loaded').dequeue();
		});
	}


});