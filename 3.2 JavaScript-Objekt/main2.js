var email = prompt("Vad är din e-postadress?");


if(validateEmail(email))
	document.write("Din e-postadress verkar stämma.<br>");
document.write(new Date(year, month, day));
function validateEmail(email) { 
    var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return re.test(email);
} 