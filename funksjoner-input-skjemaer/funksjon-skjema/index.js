const SKJEMA = document.querySelector("#skjema");
const INP_FORNAVN = document.querySelector("#inp-fornavn");
const INP_ETTERNAVN = document.querySelector("#inp-etternavn");
const AVSNITT = document.querySelector("#avsnitt");


// Sjekker at vi har fått referert til alle elementene korrekt ved å bruke console.log(SKJEMA, INP_FORNAVN, INP_ETTERNAVN, AVSNITT);
// Gjør det til en gylden regel at dere alltid logger underveis, og spesielt dersom det dere ønsker at skal skje ikke skjer (da er console.log() en god venn!)

// Denne funksjonen sørger for at fornavn og etternavn publiseres. evt.preventDefault() sørger for at dataene ikke blir tatt med videre ved submit-eventet, men at de heller publiseres på siden.
function visSkjemaData(evt) {
    evt.preventDefault();

    // Under her ser dere hvoran jeg enkelt kan opprette HTML-elementer ved bruk av template literals
    AVSNITT.innerHTML = `
        <div> Fornavn: ${INP_FORNAVN.value} </div>
        <div> Etternavn: ${INP_ETTERNAVN.value} </div>
    `;
    
    // Her tømmes input-feltene etter at dataen fra input-feltene er publiserte
    INP_FORNAVN.value = "";
    INP_ETTERNAVN.value = "";
};

// Det er for skjemaet vi "lytter til" submit-eventet. Siden knappen med type="submit" er lagt inni skjemaet i HTML, er det knappen som aktiverer submit-eventet til skjemaet. Når knappen trykkes inn, kjøres funksjonen visSkjemaData()
SKJEMA.addEventListener("submit", visSkjemaData);