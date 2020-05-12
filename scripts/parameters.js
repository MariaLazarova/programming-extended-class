//Parameters
var shipIsRunning = false;
var fuel = 535000;
var maxSpeed = 15;
var currentSpeed = 0;

document.getElementById('fuel').innerHTML = fuel + ' gallons';
document.getElementById('speed').innerHTML = currentSpeed + ' km/s';

function speedUp() {
	shipIsRunning = true;
	if (!(currentSpeed > maxSpeed) && !(maxSpeed > 15)) {
		currentSpeed++;
		document.getElementById('speed').innerHTML = currentSpeed + ' km/s';
		fuel -= 10; // fuel = fuel - 10
		document.getElementById('fuel').innerHTML = fuel + ' gallons';
	}  
}

// function speedDown() {
// 	if (currentSpeed > 0) {
// 		currentSpeed --;
// 		document.getElementById('speed').innerHTML = currentSpeed + ' km/s';
// 	} else if (currentSpeed = 0) {
// 		shipIsRunning = false;
// 	}
// }

function startBurningFuel(){
	setInterval(function() { 
		console.log('timeout');
		if(shipIsRunning) {
			fuel -= 1; 
		}
		document.getElementById('fuel').innerHTML = fuel + ' gallons';
	}, 1000);
}

window.onload = function() {
	startBurningFuel() // called when the page is loaded 
}	
