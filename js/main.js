// Variabili globali
const pricePerK = 0.21;
let message;

// Raccolta dati

// Chiedo all'utente il numero di chilometri che vuole percorrere (via prompt)
const userKil = parseInt(prompt("Inserire numero di chilometri che si vogliono percorrere."));

// Chiedo all'utente la sua età (via prompt)
const userAge = parseInt(prompt("Inserire età."));

// Elaborazione

// Calcolo il prezzo base del biglietto in base ai chilometri che l'utente vuole percorrere
const basePrice = (pricePerK * userKil).toFixed(2);