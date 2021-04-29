// [Snack 1]
// Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

var zucchina = [{
    varieta: "a",
    peso: 5,
    lunghezza: 12
}, {
    varieta: "b",
    peso: 2,
    lunghezza: 3
}, {
    varieta: "c",
    peso: 4,
    lunghezza: 15
}, {
    varieta: "d",
    peso: 3,
    lunghezza: 22
}, {
    varieta: "e",
    peso: 3,
    lunghezza: 15
}, {
    varieta: "f",
    peso: 3,
    lunghezza: 12
}, {
    varieta: "g",
    peso: 6,
    lunghezza: 11
}, {
    varieta: "h",
    peso: 2,
    lunghezza: 16
}, {
    varieta: "i",
    peso: 2,
    lunghezza: 15
}, {
    varieta: "l",
    peso: 2,
    lunghezza: 12
},
]

var somma = sommaProprieta(zucchina, "peso");


// Creo un ciclo for per il calcolo totale del peso delle zucchine
// var pesoZucchina = 0;


// for (var i = 0; i < zucchina.length; i++) {
//     pesoZucchina += zucchina[i].peso;
// }
// Stampo in console il peso totale
console.log("Il totale del peso delle zucchine è: " + somma + " kg")



//  Funzione per sommare un array di oggetti

function sommaProprieta(listaOggetti, chiaveOggettoDaSommare) {
    var somma = 0

    for (var i = 0; i < listaOggetti.length; i++) {
        somma += listaOggetti[i][chiaveOggettoDaSommare];
    }

    return somma
}


// Utilizzo la funzione per il primo esercizio. Sostituisco a somma = 0 la seguente funzione....
// Posso anche sostituire a peso la lunghezza e di conseguenza sommare tutte le lunghezza




// [Snack 2]
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine

var zucchine = [{
    "varietà": "a",
    "peso": 5,
    "lunghezza": 12
}, {
    "varietà": "b",
    "peso": 2,
    "lunghezza": 3
}, {
    "varietà": "c",
    "peso": 4,
    "lunghezza": 15
}, {
    "varietà": "d",
    "peso": 3,
    "lunghezza": 22
}, {
    "varietà": "e",
    "peso": 3,
    "lunghezza": 15
}, {
    "varietà": "f",
    "peso": 3,
    "lunghezza": 12
}, {
    "varietà": "g",
    "peso": 6,
    "lunghezza": 11
}, {
    "varietà": "h",
    "peso": 2,
    "lunghezza": 16
}, {
    "varietà": "i",
    "peso": 2,
    "lunghezza": 15
}, {
    "varietà": "l",
    "peso": 2,
    "lunghezza": 12
},
]


var zucchineSmall = [];
var zucchineLarge = [];

var sommaZuccLarge = 0;
var sommaZuccSmall = 0;

for (var i = 0; i < zucchine.length; i++) {
    var zucchina = zucchine[i];

    if (zucchina.lunghezza > 15) {
        zucchineLarge.push(zucchina);
        sommaZuccLarge += zucchina.peso;
    } else {
        zucchineSmall.push(zucchina)
        sommaZuccSmall += zucchina.peso;
    }
}

console.log("Le zucchine grandi (> 15) sono " + zucchineLarge.length + " e pesano " + sommaZuccLarge);
console.log("Le zucchine piccole (< 15) sono " + zucchineSmall.length + " e pesano " + sommaZuccSmall);




