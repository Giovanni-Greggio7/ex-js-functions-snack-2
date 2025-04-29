
//SNACK 1
// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.

function somma1(numero1, numero2){
    return a + b 
}

// console.log(somma(2, 3))

// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile

const somma2 = function somma1(numero1, numero2){
    return a + b
}

// console.log(somma(4, 6))

// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

const somma3 = (numero1, numero2) => (numero1 + numero2)


console.log(somma3(5, 3))

//SNACK 2
//Crea una arrow function che calcola il quadrato di un numero.

const moltiplica = (numero) => (numero * numero)

console.log(moltiplica(3))

//Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const quadrato1 = numero => numero * numero

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

function creaTimer(){

    setTimeout(() => {
        console.log('Tempo scaduto')
    }, 1000)
}

// creaTimer()

//SNACK 5
//Crea una funzione stampaOgniSecondo con setInterval.
//Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
//Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

let contatore = 0
let intervallo

function stampaOgniSecondo(){

    intervallo = setInterval(() =>{

        console.log('Passato un secondo')
        contatore++

        if(contatore === 5){
            clearInterval(intervallo)
            console.log('Fermato il contatore')
        }

    }, 1000)

}

// console.log(stampaOgniSecondo())

//SNACK 6
//Crea un contatore automatico con setInterval
//Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

let counter = 0
let interval

function creaContatoreAutomatico(){

    interval = setInterval(() =>{
        console.log(`Il contatore é a ${counter + 1}`)
        counter++
        }, 3000)

}

// console.log(creaContatoreAutomatico())

//SNACK 7
//Crea una funzione che ferma un timer dopo un certo tempo
//Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

conta = 0
let idIntervallo

function eseguiEFerma(avvio, messaggio, stop){

    avvio && avvio();

    idIntervallo = setInterval(() => {

        console.log(messaggio)
        conta++

        if(conta === 3){
            clearInterval(idIntervallo)
            stop && stop()
        }

    }, 3000)

}

eseguiEFerma(
    () => console.log('Inizio scansione'),
    ('Nessun rilevamento dalla scansione'),
    () => console.log('Oggetto identificato')
)


