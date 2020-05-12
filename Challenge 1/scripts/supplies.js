
//Supplies
var foodSupply = 30000;
var waterSupply = 10000;

document.getElementById('food-supply').innerHTML = foodSupply;
document.getElementById('water-supply').innerHTML = waterSupply;

function getWater() { 
  if (waterSupply > 0) {
	waterSupply --;
  	document.getElementById('water-supply').innerHTML = waterSupply;
  } 
}

function getFood() {
  if (foodSupply > 0) {
  	foodSupply --;
  	document.getElementById('food-supply').innerHTML = foodSupply;
  }
}





