// Oppgave to Valg-setninger


let NUM1 = 100;
let NUM2 = 200;

NUM1 = 300;
NUM2 = 400;

if(NUM2 > NUM1) {
    document.body.innerHTML = `
        <article>
            <h1>Overskrift</h1>
            <img src="./images/gresskar.jpg" alt="Gresskar med grønn stilk ovenfra og ned."> 
        </article>
    `
} else {
    document.body.innerHTML = `
        <p>Ingen elementer opprettet</p>
    `
};