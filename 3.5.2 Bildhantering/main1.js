$(document).ready(function() {

	var imageSrcArray = ['pics/cykel.jpg', 'pics/hus.jpg', 'pics/mat.jpg', 
						'pics/mat2.jpg', 'pics/opera.jpg', 'pics/trad.jpg'];
	var i = 0;

	var imageArray = []
	for(var x = 0; x < imageSrcArray.length; x++) {
		imageArray[x] = new Image();
		imageArray[x].src = imageSrcArray[x];
	}

	$('#imageViewer').click(function() {
		if(++i > imageArray.length-1)
			i=0;
		$(this).attr('src', imageArray[i].src);
	});

	$('#rollover').hover(function() {
		$(this).attr('src', imageArray[2].src);
	}, function(){
		$(this).attr('src', imageArray[0].src);
	});

});