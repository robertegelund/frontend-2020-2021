const KLESPLAGG = ["Kjole", "Dress", "Bukse", "Skjorte"];

// KLESPLAGG.forEach( plagg => {document.body.innerHTML += `<article>Klesplagg: ${plagg}</article>`} );


const KLESPLAGG_OG_PRIS = [
    {
        klesplagg: "Kjole",
        pris: 2300,
        bilde: "./",
        bildebeskrivelse: "En kjole"
    },
    {
        klesplagg: "Dress",
        pris: 8000,
        bilde: "./",
        bildebeskrivelse: "En dress"
    },
    {
        klesplagg: "Bukse",
        pris: 599,
        bilde: "./",
        bildebeskrivelse: "En bukse"
    },
    {
        klesplagg: "Skjorte",
        pris: 399,
        bilde: "./",
        bildebeskrivelse: "En skjorte"
    }
];

KLESPLAGG_OG_PRIS.forEach( item => {
    document.body.innerHTML += `
        <article>
            <p>Klesplagg: ${item.klesplagg}</p>
            <p>Pris: ${item.pris}</p>
            <img src=${item.bilde} alt="${item.bildebeskrivelse}">
        </article>
    `
});