const KLESPLAGG = ["Kjole", "Bukse", "Skjorte"];

// Her får vi et nytt array med endringer ved bruk av map
const SOMMERKOLLEKSJON = KLESPLAGG.map( plagg => "Sommer"+plagg.toLowerCase() );
// console.log(SOMMERKOLLEKSJON)

// Her får vi ikke noe nytt array i retur
// const SOMMERKOLLEKSJON_TEST = KLESPLAGG.forEach( plagg => "Sommer"+plagg.toLocaleLowerCase());
// console.log(SOMMERKOLLEKSJON_TEST);

// Her kan vi mappe ut hver verdi. Da fungerer .map() som .forEach().
SOMMERKOLLEKSJON.map( sommerplagg => {
    document.body.innerHTML += `
        <p>${sommerplagg}</p>
    `
});

const KLESKOLLEKSJON = [
    {
        klesplagg: "Kjole",
        pris: 299
    },
    {
        klesplagg: "Bukse",
        pris: 599
    },
    {
        klesplagg: "Skjorte",
        pris: 399
    },
    {
        klesplagg: "Kjole",
        pris: 599
    }
]

// Dette vil gi oss klesplaggene som både er kjole og som koster mindre enn 599
const FILTER_RESULTAT = 
KLESKOLLEKSJON.filter ( plagg => plagg.klesplagg === "Kjole" && plagg.pris < 599);

console.log(FILTER_RESULTAT); // Det er kun én av to kjoler i KLESKOLLEKSJON som koster mindre enn 599. Det nye arrayet, FILTER_RESULTAT, vil derfor bare bestå av denne ene kjolen.
