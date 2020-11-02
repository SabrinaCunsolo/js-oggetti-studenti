// Esercizio Oggetti-studenti JS
// Nome repo: js-oggetti-studenti

// 1. creare un oggetto che rappresenta uno studente: ogni studente è caratterizzato da un nome, un cognome e un'età. Attraverso un ciclo for-in stampare a schermo tutte le sue proprietà e il relativo valore
$(document).ready(function() {

    var studente = {
        'nome': 'Sara',
        'cognome': 'Bianchi',
        'eta': 20,
    };

    for (var key in studente) {
        console.log(studente[key]);
    }

// 2. creare un array di oggetti "studente". Ciclare su tutti gli studenti e stampare per ciascuno il nome e il cognome

    var classe1 = [
        {
            'nome': 'Luigi',
            'cognome': 'Bianchi',
            'eta': 30,
        },
        {
            'nome': 'Mario',
            'cognome': 'Rossi',
            'eta': 27,
        },
        {
            'nome': 'Anna',
            'cognome': 'Verdi',
            'eta': 24,
        },
    ];

    for (var i = 0; i < classe1.length; i++) {
        console.log(classe1[i].nome + ' ' + classe1[i].cognome);
    }

// 3. tramite 3 prompt, chiedere all'utente il nome, il cognome e l'età di un nuovo studente. Creare con questi dati un nuovo oggetto e inserirlo nell'array del punto precedente.

    var studenteNuovo = {
        'nome' : prompt('Scrivi il tuo nome'),
        'cognome' : prompt('Scrivi il tuo cognome'),
        'eta' : parseInt(prompt('Quanti anni hai?')),
    };
    console.log(studenteNuovo);
    classe1.push(studenteNuovo);
    console.log(classe1);

});
