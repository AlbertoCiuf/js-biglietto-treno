/*

chiedere all'utente quanti km vuole percorrere
chiedere all'utente la sua età
€0.21/km
sconto 20% minorenni
sconto 40% over 65
output 2 decimali

*/

const numKm = parseInt(prompt("Quanti km vuoi percorrere?"));
const userAge = parseInt(prompt("Quanti anni hai?"));
const pricePerKm = 0.21;
const travelPrice = numKm * pricePerKm;

const under18Discount = (travelPrice * 20) / 100;
const over65Discount = (travelPrice * 40) / 100;
let finalPrice = 0;

if (userAge < 18) {
  finalPrice = travelPrice - under18Discount;
} else if (userAge > 65) {
  finalPrice = travelPrice - over65Discount;
}else {
  finalPrice = travelPrice;
}

document.getElementById("content").innerHTML = "Il prezzo da pagare è €"+ (Math.round(finalPrice * 100) / 100).toFixed(2);