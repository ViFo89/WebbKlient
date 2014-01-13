
$(document).ready(function(){

	//Lägger till storageChanged som metod när storage ändras.
	window.addEventListener("storage", storageChanged);

	//Sätter storage till det som är nuvarande värdet 
	if(localStorage['name'] == '')
		$('#locStorage').text('-');
	else
		$('#locStorage').text(localStorage['name']);

	if(sessionStorage['secretNumber'] == '')
		$('#sesStorage').text('-');
	else
		$('#sesStorage').text(sessionStorage['secretNumber']);

	/*
	Metod som anroppas när storage ändras. Session uppdateras inte, 
	jag fick nått fel där den inte uppdaterades så jag tänkte att det kanske är så
	session fungerar.
	*/
	function storageChanged(e) {
		$('#localStorage').text(localStorage['name']);

	}
	//Tömmer nuvarande storage i storage
	$('#removeData').click(function(evt){
		sessionStorage.clear();
		localStorage.clear();
		evt.preventDefault();
	});

});
