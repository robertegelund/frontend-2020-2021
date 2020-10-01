
// Funksjon med tall som parametere
function leggSammen( tall1, tall2 ) {
    return tall1 + tall2 + 5;
}

const RESULT = leggSammen( 1, 5 );
console.log(RESULT);


// Funksjon med tekst som parametere
function lagSetning ( ord1, ord2 ) {
    return ord1 + ord2;
};

const SETNING = lagSetning("Hei,", "du!");
console.log(SETNING);


// Lage et avsnitt med tekst som parametere og putte det inn i document.body.innerHTML. Du kunne også valgt body med querySelector() først.
function lagAvsnitt ( ord1, ord2 ) {
    document.body.innerHTML +=
        `
            <p>${ord1 + ord2}</p>
            <p>${ord1} ${ord2}</p>
        `
};  


lagAvsnitt("Hei", "du!");

