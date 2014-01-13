$(document).ready(function(evt){
	//Sätter input till de värdena som redan finns i storage.
	$('#name').val(localStorage['name']);
	$('#secretNumber').val(sessionStorage['secretNumber']);

	// Eventlistener på när man tryckt på en tangent, värdet i sessionStorage och localStorage sparas
	$('#name').keyup(function(){
		localStorage.setItem('name', $(this).val());
		console.log('save 1!');
	});
	$('#secretNumber').keyup(function(){
		sessionStorage.setItem('secretNumber', $(this).val());
		console.log('save 2!');
	});


});