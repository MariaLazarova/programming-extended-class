//Environment

var distanceTraveled = 0;
var maxDistance = 173.49;

document.getElementById('distance-traveled').innerHTML = distanceTraveled + ' million km';

function increaseDistance() {
	if (distanceTraveled < maxDistance) {
		distanceTraveled ++;
		document.getElementById('distance-traveled').innerHTML = distanceTraveled + ' million km';
	}
}

setInterval(function() {
	if(increaseDistance) {
		distanceTraveled += 3;
	}
	document.getElementById('distance-traveled').innerHTML = distanceTraveled + ' million km';
}, 1000);