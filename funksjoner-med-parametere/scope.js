// Globale konstanter og variabler kan brukes både inni og utenfor funksjoner
const HILSEN = "Hei";
let laOssTaHelg = "Ja!";

function hei() {
    console.log(HILSEN);
    console.log(laOssTaHelg);

    // Lokale konstanter og variabler kan kun brukes inni funksjonen de er definert inni

    const FARVEL = "Ha det!"
    // console.log(FARVEL);

    let HADET = "Farvel";
    // console.log(HADET);

    return HADET;
};

let VARIABEL = hei();

console.log(VARIABEL);
