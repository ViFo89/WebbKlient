$(document).ready(function(){

	$('#change').click(function(){
		$(this).css('background-color','green');
	});
	$('#newContent').click(function(){
		$(this).text('Här är lite ny text!');
	});
	$('#remove').click(function(){
		$(this).remove();
	});
	$('#textInput').keyup(function(){
		$('#getInfo span').text($('#textInput').val());
	});
	$('#toggle').click(function(){
		$(this).toggleClass('toggleClass1').toggleClass('toggleClass2');
	});
	$('#windowSize span').text($(this).width()+'x'+$(this).height());
	$(window).resize(function(){
		$('#windowSize span').text($(this).width()+'x'+$(this).height());
	});
	$('#textInput').focus(function(){
		$(this).css('border','2px solid red');
	});
	$('#textInput').blur(function(){
		$(this).css('border','');
	});
	$('#hover').hover(function(){
		$(this).css('background-color','blue');
	},function(){
		$(this).css('background-color','lightblue');
	});
	$('#toggle2').toggle(function(){
		$(this).text('På');
	},function(){
		$(this).text('Av');
	});
	$('#mousePosClick').click(function(evt){
		$('#mousePosClick span').text('X = ' + evt.pageX + ', Y = ' + evt.pageY);
	});
	$('#preventLink').click(function(evt){
		evt.preventDefault();
	});
	$('#removeEvent').mouseover(function(){
		$(this).css('background-color','yellow');
	});
	$('#removeEvent').mouseout(function(){
		$(this).css('background-color','orange');
		$('#removeEvent').unbind('mouseover');
		$('#removeEvent').unbind('mouseout');
	});

});

