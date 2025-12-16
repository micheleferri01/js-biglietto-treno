// Variabili globali
const pricePerK = 0.21;
let userKil;
let userAge;
let basePrice;
let message;
let discount;
let discountedPrice;

// Raccolta dati

// Chiedo all'utente il suo nome
const userName = prompt("Inserire il proprio nome.");
// bonus 2
if (userName == "Stefano" || userName == "stefano"){
    message = alert ("Il viaggio è grauito.");
}

// Bonus 3
else if (userName == "Tiziano" || userName == "tiziano"){
    // Chiedo all'utente il numero di chilometri che vuole percorrere (via prompt)
    userKil = parseInt(prompt("Inserire numero di chilometri che si vogliono percorrere."));
    if (isNaN(userKil)){
        message = alert("Valore non valido ricaricare la pagina e riprovare");

    }
    else{
        const pricePerKilForTiziano = (0.50).toFixed(2);
        const priceForTiziano = (pricePerKilForTiziano * userKil).toFixed(2);
        message = alert(`Utente: Tiziano
            prezzo biglietto: € ${priceForTiziano}`);
    }
}
else {

    // Chiedo all'utente il numero di chilometri che vuole percorrere (via prompt)
    userKil = parseInt(prompt("Inserire numero di chilometri che si vogliono percorrere."));
    // const userKil = 100;
    
    
    // Chiedo all'utente la sua età (via prompt)
    userAge = parseInt(prompt("Inserire età."));
    // const userAge = 63;
    
    
    // Elaborazione
    
    // Calcolo il prezzo base del biglietto in base ai chilometri che l'utente vuole percorrere
    basePrice = (pricePerK * userKil).toFixed(2);
    
    if (isNaN(userKil) || isNaN(userAge)){
    
        
        message = alert("Valore non valido ricaricare la pagina e riprovare");
    }
    else{
    
        // SE (l'utente è minorenne)
        if (userAge < 18) {
            // calcolo lo sconto da applicare
             discount = (basePrice * 20 / 100).toFixed(2);
        
            //  Applico sconto del 20 % sul costo base del biglietto
            discountedPrice = (basePrice - discount).toFixed(2);
        
            // Mostro all'utente il nuovo costo del biglietto dopo aver applicato lo sconto del 20%
            // console.log(discountedPrice);
            message = alert(`L'utente è minorenne.
            Prezzo biglietto: € ${discountedPrice}`);
        }
        
        // ALTRIMENTI SE(l'utente è over 65)
        else if (userAge > 65){
            // calcolo lo sconto da applicare
            discount = (basePrice * 40 / 100).toFixed(2);
        
            //  Applico sconto del 40 % sul costo base del biglietto
            discountedPrice = (basePrice - discount).toFixed(2);
        
            // Mostro all'utente il nuovo costo del biglietto dopo aver applicato lo sconto del 40%
            // console.log(discountedPrice);
            message = alert(`L'utente è over 65.
            Prezzo biglietto: € ${discountedPrice}`);
        
        }
        
        // ALTRIMENTI
        else{
            // Mostro all'utente il costo del biglietto base per i chilometri che vuole percorrere
            // console.log(basePrice);
            message = alert(`L'utente non rientra nelle categorie soggette a sconti.
            Prezzo biglietto: € ${basePrice}`);
        
        }
    }
}