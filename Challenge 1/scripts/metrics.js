
//Metrics
var payload = 15000;
var payloadMax =16800;

document.getElementById('payload').innerHTML = payload + ' kg';

function changePayload() {
	var payload1 = prompt('change payload');
	payload = payload1;
	document.getElementById('payload').innerHTML = payload + ' kg';
	if (payload1 > payloadMax) {
		alert('The number exceeds the max payload. Please insert lower number');
	}
}
	

