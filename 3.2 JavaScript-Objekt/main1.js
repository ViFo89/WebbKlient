var run = true;
var num = Math.floor(Math.random()*1000);
var gissningar = [];
while(run) 
{
	var gissning = prompt('Gissa vilket nummer jag tänker på (0-1000): ');
	gissningar.push(gissning);
	if(gissning == null) 
		run = false;
	else
	{
		if(gissning < num)
			alert('Gissa högre!');
		else if(gissning > num)
			alert('Gissa lägre!')
		else 
		{
			alert('Du gissade rätt!');
			run = false;
		}
	}
}
document.write('Du klarade det på '+ gissningar.length + ' försök!');
document.write('<br>Dina gissningar var:<br>')
for (var i = 0; i < gissningar.length; i++) {
		document.write(gissningar[i] + ' ');
};