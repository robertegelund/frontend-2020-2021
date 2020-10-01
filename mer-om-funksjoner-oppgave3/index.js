const FIRKANT = document.querySelector("#firkant");
const INP_X = document.querySelector("#inpX");
const INP_Y = document.querySelector("#inpY");

function flyttFirkanten() {
    FIRKANT.style.transform = `translateX(${INP_X.value}px)`;
    FIRKANT.style.transform = `translateY(${INP_Y.value}px)`;

    //Alternativ løsning:
        // 1) Sett position til absolute i CSS-dokumentet
        // 2) Bruk style.left for å dytte firkanten i X-retning
        // 3) Bruk style.top for å dytte firkanten i Y-retning
};

INP_X.addEventListener("input", flyttFirkanten);
INP_Y.addEventListener("input", flyttFirkanten);