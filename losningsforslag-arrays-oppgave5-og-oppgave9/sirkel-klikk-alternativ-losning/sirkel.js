
const xCoord = [];
const yCoord = [];
let x;
let y;
let i = 0;

function lagreKlikk(evt) {
    const klikkX = evt.clientX;
    const klikkY = evt.clientY;

    xCoord.push(klikkX); // Her legger vi inn en verdi sist i arrayet for hvert klikk
    yCoord.push(klikkY); // Her legger vi inn en verdi sist i arrayet for hvert klikk

    // Første gang man klikker vil vi hente verdier fra plass 0, neste gang vi klikker fra plass 1 o.s.v. i arrayene. Dette er fordi vi lenger ned i funksjonen har sagt at i skal øke med 1 hver gang vi klikker (i++).
    x = xCoord[i];
    y = yCoord[i];


    // Alternativet til const sirkel = document.createElement("div"); er at vi bruker document.body.innerHTML. Det som er viktig er at vi gir hver sirkel en unik id eller klasse, slik at querySelector seinere klarer å få tak i akkurat det elementet vi leter etter
    document.body.innerHTML += `
        <div id=sirkel-${i}></div>
    `;

    // Vi velger sirkelen på bakgrunn av den unike id-en eller unike klassen vi har gitt
    const sirkel = document.querySelector(`#sirkel-${i}`);

    // Her oppretter vi selve elementet div og kaller det sirkel. De spesifikasjonene for div-elementene som ikke skal endres er definert i CSS-fila. Lenger ned her ser dere at vi bare definerer left og top, siden selve plasseringen av sirklene er avhengig av JavaScript.
   

    // Trekker fra radius for å få sirkelen på midten av musepekeren. I dette tilfellet er radius = 30 / 2 = 15, siden høyden og bredden er 30.
    sirkel.style.left = x - 15 + "px";
    sirkel.style.top = y - 15 + "px";

    i++;
}

document.addEventListener("click", lagreKlikk); // Vi legger på eventListener på selve HTML-dokumentet