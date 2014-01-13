$(document).ready(function(){

	$('.panel').hide();
	$('.panel:first-child').show();

	$('.tabs a').click(function(evt){
		var tabSelect = $(this).attr('href');
		$('.panel').hide();
		$(tabSelect).show();
		evt.preventDefault();
	});



	$('#slider').anythingSlider();

});