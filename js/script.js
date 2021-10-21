/*

chiedere all'utente quanti km vuole percorrere
chiedere all'utente la sua età
€0.21/km
sconto 20% minorenni
sconto 40% over 65
output 2 decimali

*/

/*

BONUS: 
  -controllare validità dati inseriti
  -codice sconto SCONTO20: se l'utente ha 20 anni o meno ulteriore sconto del 20%

*/

const numKm = parseInt(prompt("Quanti km vuoi percorrere?"));
const userAge = parseInt(prompt("Quanti anni hai?"));
const discountCode = prompt("Se hai un codice sconto, inseriscilo qui");
const pricePerKm = 0.21;
const travelPrice = numKm * pricePerKm;

const promCodeDiscount = (travelPrice * 20) / 100;
const under18Discount = (travelPrice * 20) / 100;
const over65Discount = (travelPrice * 40) / 100;
let finalPrice = 0;

//controllo validità
if (isNaN(numKm)) {
  alert("Inserisci un valore numerico!");
}
if (isNaN(userAge)) {
  alert("Inserisci un valore numerico!");
}

if (discountCode !== "SCONTO20") {
  alert("Codice sconto non valido!");
}


//calcoli prezzi 
if (discountCode === "SCONTO20" && userAge < 18) {
  finalPrice = ((travelPrice - under18Discount) - ((travelPrice - under18Discount)*20/100));
} 
else if (discountCode === "SCONTO20" && (userAge > 18 && userAge <= 20)) {
  finalPrice = travelPrice - promCodeDiscount;
} 
else if (discountCode === "SCONTO20" && userAge > 20) {
  alert("Non rientri nella fascia d'età a cui è destinato lo sconto.");
  if (userAge > 65) {
    finalPrice = travelPrice - over65Discount;
  } 
  else {
    finalPrice = travelPrice;
  }
}

//output
document.getElementById("content").innerHTML = "Il prezzo da pagare è €"+ (Math.round(finalPrice * 100) / 100).toFixed(2);


/* Versione base

if (userAge < 18) {
  finalPrice = travelPrice - under18Discount;
} else if (userAge > 65) {
  finalPrice = travelPrice - over65Discount;
} else {
  finalPrice = travelPrice;
}
*/


