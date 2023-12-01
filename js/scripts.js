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
let age
age = prompt("Inserisci la tua età");

// Richiesta Km da percorrere
let km = prompt("Inserisci il numero di km da percorrere");

// Calcolo Prezzo del biglietto senza sconti
let priceTicket;
priceTicket = (km * 0.21)
console.log(priceTicket)

//Calcolo prezzo del biglietto con sconti:
//20% per i minorenni
//40% per gli over 65
let priceTicketUnderage;
let priceTicketOver;

if (age <= 18) {
    priceTicketUnderage = (priceTicket - (priceTicket * 20 / 100));
    priceTicketUnderage = priceTicketUnderage.toFixed(2);
    console.log(priceTicketUnderage);
    document.querySelector('div > p').innerHTML = `
    Il prezzo è di : ${priceTicket} 
    Però dato che sei minorenne hai uno sconto del 20%, il tuo prezzo è di : ${priceTicketUnderage}
    `

}
else if (age >= 65){
    priceTicketOver = (priceTicket - (priceTicket * 40 / 100));
    priceTicketOver = priceTicketOver.toFixed(2);
    console.log(priceTicketOver);
    document.querySelector('div > p').innerHTML = `
    Il prezzo è di ${priceTicket}
    Però dato che sei over 65 hai uno sconto del 40%, il tuo prezzo è di ${priceTicketOver}
    `
}
else {
    priceTicket = priceTicket.toFixed(2);
    console.log(priceTicket);
    document.querySelector('div > p')`
    Il prezzo è di ${priceTicket}
    `
}
