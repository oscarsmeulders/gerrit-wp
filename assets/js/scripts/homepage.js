jQuery(document).ready(function($){

	function calculateTimeout() {
		var timeout = Math.floor((Math.random(5)*10) * 1000);
		//console.log (timeout);
		return timeout;
	}
	$('.one').cycle({
		timeout: calculateTimeout()
	});
	$('.two').cycle({
		timeout: calculateTimeout()
	});
	$('.three').cycle({
		timeout: calculateTimeout()
	});
	$('.four').cycle({
		timeout: calculateTimeout()
	});


});