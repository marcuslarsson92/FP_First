var canvas = document.getElementById("myCanvas");
		// Hämta 2D-kontexten för canvasen
var ctx = canvas.getContext("2d");
		// Rita ellipsen
ctx.beginPath();
ctx.ellipse(200, 200, 150, 175, 175, 175, 2 * Math.PI);
ctx.stroke();

