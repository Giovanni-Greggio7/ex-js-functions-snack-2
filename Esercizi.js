
//SNACK 1
// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.

function somma1(numero1, numero2) {
    return a + b
}

// console.log(somma(2, 3))

// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile

const somma2 = function somma1(numero1, numero2) {
    return a + b
}

// console.log(somma(4, 6))

// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

const somma3 = (numero1, numero2) => (numero1 + numero2)

// const somma = (a, b) => a + b //CORREZIONE


console.log(somma3(5, 3))

//SNACK 2
//Crea una arrow function che calcola il quadrato di un numero.

const moltiplica = (numero) => (numero * numero)

console.log(moltiplica(3))

//Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const quadrato1 = numero => numero * numero

//const quadrato = numero => numero ** 2 //Altro metodo per elevare alla potenza

console.log(quadrato1(5))

//SNACK 3
//Crea una funzione eseguiOperazione
//Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

const somma = (a, b) => a + b
const differenza = (a, b) => a - b
const moltiplicazione = (a, b) => a * b
const divisione = (a, b) => a / b

const eseguiOperazione = (a, b, operazione) => operazione(a, b)

console.log(eseguiOperazione(4, 4, somma))
console.log(eseguiOperazione(4, 4, differenza))
console.log(eseguiOperazione(4, 4, moltiplicazione))
console.log(eseguiOperazione(4, 4, divisione))

//SNACK 4
//Crea un generatore di funzioni creaTimer
//Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer(tempo) {

    setTimeout(() => {
        console.log('Tempo scaduto')
    }, tempo)

}

// creaTimer(5000)

//SNACK 5
//Crea una funzione stampaOgniSecondo con setInterval.
//Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
//Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

let contatore = 0
let intervallo

function stampaOgniSecondo(messaggio) {

    intervallo = setInterval(() => {

        console.log(messaggio)
        contatore++

        if (contatore === 5) {
            clearInterval(intervallo)
            console.log('Fermato il contatore')
        }

    }, 1000)

}

// console.log(stampaOgniSecondo(Passato un secondo))

//SNACK 6
//Crea un contatore automatico con setInterval
//Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.


function creaContatoreAutomatico(tempo) {

    let counter = 0

    setInterval(() => {

        console.log(`Il contatore é a ${counter + 1}`)
        counter++

    }, tempo)

}

// const contaOgniSecondo = creaContatoreAutomatico(3000)
//contaOgniSecondo()

//SNACK 7
//Crea una funzione che ferma un timer dopo un certo tempo
//Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

conta = 0
let idIntervallo

function eseguiEFerma(avvio, messaggio, stop) {

    avvio && avvio();

    idIntervallo = setInterval(() => {

        console.log(messaggio)
        conta++

        if (conta === 3) {
            clearInterval(idIntervallo)
            stop && stop()
        }

    }, 3000)

}

// eseguiEFerma(
//     () => console.log('Inizio scansione'),
//     ('Nessun rilevamento dalla scansione'),
//     () => console.log('Oggetto identificato')
// )

//SNACK 8(BONUS)
//Crea una funzione che simula un conto alla rovescia
//Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.



function contoAllaRovescia(a) {

    let count = a

    let countdown = setInterval(() => {

        console.log(count)
        count--

        if (count === 0) {
            clearInterval(countdown)
            console.log('Tempo scaduto!')
        }

    }, 1000)

}

// console.log(contoAllaRovescia(5))

//SNACK 9(BONUS)
//Creare una funzione che esegue una sequenza di operazioni con ritardi
//Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.
//Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.

// const array = [
//     () => console.log("Ciao!"),
//     () => console.log("Come..."),
//     () => console.log("...stai?")
// ];

// function sequenzaOperazioni(array, intervallo) {

//     for (let i = 0; i < array.length; i++) {

//         let ritardo = i * intervallo

//         setTimeout(() => {

//             array[i]()

//         }, ritardo)
//     }

// }

// sequenzaOperazioni([
//     () => console.log("Ciao!"),
//     () => console.log("Come..."),
//     () => console.log("...stai?")
//   ], 2000);

//CORREZIONE
function sequenzaOperazioni2(operazioni, intervallo){

    operazioni.forEach((operazione, index) => {
        setTimeout(() => {
            operazione()
        }, intervallo * index)
    })

}

sequenzaOperazioni2([
    () => console.log('Operazione 1'),
    () => console.log('Operazione 2'),
    () => console.log('Operazione 3')
  ], 2000);


//SNACK 10
//Creare un throttler per limitare l’esecuzione di una funzione
//Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.
//Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.

// function creaThrottler(callback, limite){

//      let ultimaEsecuzione = 0

//      return function(...args){

//         const ora = Date.now()

//         if(ora - ultimaEsecuzione >= limite){
//             ultimaEsecuzione = ora
//             callback(...args)
//         } else {
//             console.log('Non posso eseguire')
//         }
//      }

// }

function creaThrottler(callback, tempo) {

    let puòFare = true

    return () => {

        if (puòFare) {
            callback();
            puòFare = false;

            setTimeout(() => {
                puòFare = true;
            }, tempo);
        }
    };
}

const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);

throttledLog(); // ✅ "Eseguito!"
throttledLog(); // ❌ Ignorato (chiamato troppo presto)
setTimeout(throttledLog, 2500); // ✅ "Eseguito!" (dopo 2.5 secondi)











