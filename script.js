// [Snack 1]
// Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

var zucchina = [{
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

// Creo un ciclo for per il calcolo totale del peso delle zucchine
var pesoZucchina = 0;
for (var i = 0; i < zucchina.length; i++) {
    pesoZucchina += zucchina[i].peso;
}
// Stampo in console il peso totale
console.log("Il totale del peso delle zucchine è: " + pesoZucchina, " kg")


// [Snack 2]
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine

var zucchina = [{
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


zucchineSmall = [];
zucchineLarge = [];
