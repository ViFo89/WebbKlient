$(document).ready(function() {

	var canvas = document.getElementById("drawingCanvas");
	var context = canvas.getContext("2d");

	context.lineWidth = 10;
	context.strokeStyle = "rgb(205,40,40)";

	//En rak linje
	context.moveTo(20,20);
	context.lineTo(250,40);
	context.lineCap = "butt";
	context.stroke();

	//En rak linje med en annan sorts ände 
	context.beginPath();
	context.moveTo(30,120);
	context.lineTo(200,120);
	context.lineCap = "round";
	context.stroke();

	//Save används för att kunna komma tillbaka från att skugga ett objekt
	context.save();
	//Blå triangel
	context.beginPath();
	context.moveTo(300,300);
	context.lineTo(100,400);
	context.lineTo(350,400);
	context.lineTo(300,300);
	context.closePath();
	context.fillStyle = "blue";
	context.shadowColor = "#bbbbbb";
	context.shadowBlur = 20;
	context.shadowOffsetX = 15;
	context.shadowOffsetY = 15;
	context.fill();
	//Återställer context till när det sparades innan triangeln ritades
	context.restore();

	// Använder variabler för att rita en kurva
	var centerX = 150;
	var centerY = 300;
	var radius = 100;
	var startingAngle = 1.25 * Math.PI;
	var endingAngle = 1.75 * Math.PI;
	// Kurvan ritas
	context.beginPath();
	context.arc(centerX, centerY, radius, startingAngle, endingAngle);
	context.stroke();

	// En bana
	context.beginPath();
	context.moveTo(550, 100);
	context.bezierCurveTo(500, 400, 650, 650, 665, 133);
	context.stroke();

	// En genomskinlig fyrkant
	context.beginPath();
	context.translate(75, 110);
	context.rect(0, 0, 30, 30);
	context.closePath();
	context.fillStyle = "rgba(100,150,185,0.5)";
	context.fill();

	//återställer 0-punkten
	context.translate(-75, -110);

	// Ritar en bild i nedre vänstra hörnet
	context.beginPath();
	var img = new Image();
	img.src = "pics/hus.jpg";
	img.onload = function() {
		context.drawImage(img, 10, 790);
	};

	// Skriver ut en text
	context.font = "bold 40px Verdana,sans-serif";
	context.textBaseline = "top";
	context.fillStyle = "black";
	context.fillText("Här är lite text", 500, 10);

	context.save();
	// En triangel som skiftar färg
	context.beginPath();
	context.moveTo(400,400);
	context.lineTo(200,500);
	context.lineTo(450,500);
	context.lineTo(400,400);
	context.closePath();
	var gradient = context.createLinearGradient(200, 0, 450, 0);
	gradient.addColorStop(0, "magenta");
	gradient.addColorStop(1, "yellow");
	context.fillStyle = gradient;
	context.fill();

	context.restore();
	//en triangel som använder mönster
	context.beginPath();
	context.moveTo(500,500);
	context.lineTo(300,600);
	context.lineTo(550,600);
	context.lineTo(500,500);
	context.closePath();
	var img2 = new Image();
	img2.src = "pics/pattern.png";
	var pattern = context.createPattern(img2, "repeat");
	context.fillStyle = pattern;

	context.fill();
	//skriver ut url för bilden.
	var url = canvas.toDataURL();
	$('#save').html(url);
});

/*
x Rita raka linjer och kurvlinjer
x Rita banor (path's) och former ifyllda med både färg, mönster och gradienter
x Rita text (exempelvis dagens datum/tid)
x Använda transparens och skuggor
x Lägga till en eller flera bitmappad bilder
x Använda en teknik för att spara bilden
*/