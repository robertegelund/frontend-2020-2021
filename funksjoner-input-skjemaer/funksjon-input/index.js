// Her velger vi input-feltet med id="input-text" ved bruk av querySelector
const INPUT_TEXT = document.querySelector("#input-text");
// console.log(INPUT_TEXT);

// Her velger vi p-elementet med id="avsnitt" ved bruk av querySelector
const AVSNITT = document.querySelector("#avsnitt");
// console.log(INPUT_TEXT, AVSNITT);


// Når vi kjører denne funksjonen vises teksten til input-feltet i avsnittet
function visTekst() {
    AVSNITT.innerHTML = INPUT_TEXT.value;
};

// Her kjøres funksjonen visTekst() når vi skriver i input-feltet
    // INPUT_TEXT.addEventListener("input", visTekst);


// Her kjøres funksjonen visTekst() når vi klikker enter etter å ha skrevet noe i input
INPUT_TEXT.addEventListener("change", visTekst);