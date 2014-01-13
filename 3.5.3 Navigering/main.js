$(document).ready(function(){
	$('a[href^="http://"]').attr('target','_blank');
	
	$("#navi").navPlugin({
		'itemWidth': 150,
		'itemHeight': 30,
		'navEffect': 'slide',
		'speed': 1000
	});
});