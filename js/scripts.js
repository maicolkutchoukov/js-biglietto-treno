// Il programma dovrà chiedere all'utente       
// il numero di chilometri che vuole percorrere             OK
// l'età del passeggero.                                    OK
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
// Questo richiederà un minimo di ricerca.


// Richiesta età del passeggero 

const age = prompt("Inserisci la tua età");
const ageInNumber = parseInt(age)

// Richiesta Km da percorrere
const km = prompt("Inserisci il numero di km da percorrere");
const kmInNumber = parseInt(km)

// Calcolo Prezzo del biglietto senza sconti
let priceTicket;
priceTicket = (kmInNumber * 0.21)
console.log(priceTicket)

//Calcolo prezzo del biglietto con sconti:
//20% per i minorenni
//40% per gli over 65

let priceDiscount = priceTicket

if (ageInNumber < 18) {
    priceDiscount *= 0.8;
    console.log(priceDiscount)
}
else if (ageInNumber >= 65){
    priceDiscount *= 0.6;
    console.log(priceDiscount)
}

document.querySelector('div > p').innerHTML =  "Il prezzo è di: € " + priceDiscount.toFixed(2)

