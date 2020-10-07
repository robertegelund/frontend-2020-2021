// Jeg definerer konstanter med store bokstaver for å kjenne igjen at det er en konstant. MEN: det er ikke "ulovlig" å bruke camelcase. Folk har bare ulik praksis.
const MAIN = document.querySelector("main");
const HELTALL = [15, 20, 25, 30, 50, 60, 70, 85];

// Viktig å definere denne variabelen (let indeks = 0) utenfor funksjonen. Hvis ikke vil den være lik null hver gang vi kjører funksjonen. MEN: vi ønsker jo at den skal øke for hver gang funksjonen kjører. Hvor ofte fuksjonen kjører er bestemt av setInterval.
let indeks = 0;

function endreBredde() {
    // Her sier vi at: hvis indeks er større enn lengden til HELTALL-arrayet, så skal indeks "nullstilles", altså gå tilbake til 0
    if (indeks > HELTALL.length) {
        indeks = 0;
    }
   
    // Her definerer vi bredden til main
    MAIN.style.width = HELTALL[indeks]+"px";

    // Dere kan gjerne også bruke console.log(HELTALL[indeks]) for hver gang funksjonen kjøres. Da ser dere tydelig hvilket tall som hentes ut per runde.

    // Indikerer at vi øker indeks med 1 for hver gang funksjonen kjører
    indeks++;
};

// Her angir vi tiden i millisekunder
setInterval(endreBredde, 500);