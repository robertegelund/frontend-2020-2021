
const xCoord = [];
const yCoord = [];
let x;
let y;
let i = 0;

function lagreKlikk(evt) {
    console.log("i=" + "" + i);
    const klikkX = evt.clientX;
    const klikkY = evt.clientY;

    xCoord.push(klikkX); // Her legger vi inn en verdi sist i arrayet for hvert klikk
    yCoord.push(klikkY); // Her legger vi inn en verdi sist i arrayet for hvert klikk

    // Første gang man klikker vil vi hente verdier fra plass 0, neste gang vi klikker fra plass 1 o.s.v. i arrayene. Dette er fordi vi lenger ned i funksjonen har sagt at i skal øke med 1 hver gang vi klikker (i++).
    x = xCoord[i];
    y = yCoord[i];

    // Her oppretter vi selve elementet div og kaller det sirkel. De spesifikasjonene for div-elementene som ikke skal endres er definert i CSS-fila. Lenger ned her ser dere at vi bare definerer left og top, siden selve plasseringen av sirklene er avhengig av JavaScript.
    const sirkel = document.createElement("div");

    // Trekker fra radius for å få sirkelen på midten av musepekeren. I dette tilfellet er radius = 30 / 2 = 15, siden høyden og bredden er 30.
    sirkel.style.left = x - 15 + "px";
    sirkel.style.top = y - 15 + "px";

    // Her legger vi til div-elementet med navnet sirkel til det som allerede eksisterer i body fra før
    document.body.appendChild(sirkel);

    i++;

    console.log("Array for X-koordinater:" + "" + xCoord);
    console.log("Array for Y-koordinater:" + "" + yCoord);
}

document.addEventListener("click", lagreKlikk); // Vi legger på eventListener på selve HTML-dokumentet