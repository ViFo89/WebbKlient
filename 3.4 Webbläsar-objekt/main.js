$(document).ready(function(){
	window.defaultStatus = "laddar";
	$('#winDefSta').text(window.defaultStatus);
	window.status = "lala";
	$('#winSta').text(window.status);
	$('#winScrLeft').text(window.screenLeft);
	$('#winScrTop').text(window.screenTop);
	$('#winScrX').text(window.screenX);
	$('#winScrY').text(window.screenY);
	$('#winInH').text(window.innerHeight);
	$('#winInW').text(window.innerWidth);
	$('#winOuH').text(window.outerHeight);
	$('#winOuW').text(window.outerWidth);
	$('#winPaXOff').text(window.pageXOffset);
	$('#winPaYOff').text(window.pageYOffset);

	$('#appCodeName').text(navigator.appCodeName);
	$('#appName').text(navigator.appName);
	$('#appVersion').text(navigator.appVersion);
	$('#platform').text(navigator.platform);
	$('#userAgent').text(navigator.userAgent);
	$('#cookieEnabled').text(navigator.cookieEnabled);

	$('#scrWidth').text(screen.width);
	$('#scrHeight').text(screen.height);
	$('#availWidth').text(screen.availWidth);
	$('#availHeight').text(screen.availHeight);
	$('#colorDepth').text(screen.colorDepth);
	$('#pixelDepth').text(screen.pixelDepth);

	$('#host').text(location.host);
	$('#hostname').text(location.hostname);
	$('#port').text(location.port);
	$('#href').text(location.href);
	$('#protocol').text(location.protocol);
	$('#pathname').text(location.pathname);
	$('#hash').text(location.hash);
	$('#search').text(location.search);

	$('#linkAlert').click(function(evt){
		window.alert('ALERT!');
		evt.preventDefault();
	});
	$('#linkPrompt').click(function(evt){
		window.prompt('Prompt!');
		evt.preventDefault();
	});
	$('#linkConfirm').click(function(evt){
		window.confirm('Confirm?');
		evt.preventDefault();
	});
	var myWindow;
	$('#divLinkOpen').click(function(){
		myWindow = window.open('','','width=200,height=100');
	});
	$('#divLinkClose').click(function(){
		myWindow.close('');
	});
	$('#textInput').focus(function(){
		$(this).css('border','2px solid red');
	});
	$('#textInput').blur(function(){
		$(this).css('border','');
	});
	$('#linkFocus').click(function(evt){
		window.focus();
		evt.preventDefault();
	});
	$('#linkBlur').click(function(evt){
		window.blur();
		evt.preventDefault();
	});
	var myvar;
	$('#setInterval').click(function(evt){
		myvar = window.setInterval(function(){
			alert("2 Sekunder!")
		}, 2000);
		evt.preventDefault();

	});
	$('#clearInterval').click(function(evt){
		window.clearInterval(myvar);
		evt.preventDefault();
	});
	var myvar2;
	$('#setTimeout').click(function(evt){
		myvar2 = window.setTimeout(function(){
			alert("2 Sekunder!")
		}, 2000);
		evt.preventDefault();
	});
	$('#clearTimeout').click(function(evt){
		window.clearTimeout(myvar);
		evt.preventDefault();
	});
	$('#moveBy').click(function(evt){
		myWindow.moveBy(50,50);
		evt.preventDefault();
		myWindow.focus();
	});
	$('#moveTo').click(function(evt){
		myWindow.moveTo(0,0);
		evt.preventDefault();
		myWindow.focus();
	});
	$('#resizeTo').click(function(evt){
		myWindow.resizeTo(100,100);
		evt.preventDefault();
		myWindow.focus();
	});
	$('#resizeBy').click(function(evt){
		myWindow.resizeBy(100,100);
		evt.preventDefault();
		myWindow.focus();
	});

	$('#scrollTo').click(function(evt){
		window.scrollTo(0,0);
		evt.preventDefault();
	});
	$('#scrollBy').click(function(evt){
		window.scrollBy(0,-10);
		evt.preventDefault();
	});
	$('#print').click(function(evt){
		window.print();
		evt.preventDefault();
	});
	$('#assign').click(function(evt){
		location.assign("http://google.se");
		evt.preventDefault();
	});
	$('#reload').click(function(evt){
		location.reload();
		evt.preventDefault();
	});
	$('#replace').click(function(evt){
		location.replace('http://google.se');
		evt.preventDefault();
	});
});