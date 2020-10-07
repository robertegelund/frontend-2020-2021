const HESTER = ["Kaldblods", "Fjording", "Hingst", "Ponni", "Islandshest"];

const LISTE = document.querySelector("ul");
console.log(LISTE);

HESTER.forEach( hest => {
    LISTE.innerHTML += `    
        <li>${hest}</li>
    `
});

let TEKST = "Du gamle du fria";
console.log(TEKST.length);

// Et godt alternativ for å traversere setninger eller ord
for (const letter of TEKST) {
    console.log(letter);
}

