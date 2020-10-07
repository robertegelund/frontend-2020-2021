const ARRAY2 = [
    {
        klesplagg: "Kjole",
        pris: 100
    },
    {
        klesplagg: "Dress",
        pris:5000
    },
    {
        klesplagg: "skjorte",
        pris:499
    },
    {
        klesplagg: "jeans",
        pris:699
    }
    ]
    
    const TILFELDIG_TALL = Math.random();
    //console.log(TILFELDIG_TALL);
    
    const TILPASSET_TALL = Math.random() * ARRAY2.length
    //console.log(TILFELDIG_TALL);
    
    const AVRUNDET_TALL = Math.floor(TILPASSET_TALL);
    //console.log(AVRUNDET_TALL);
    
    const KJOLE = ARRAY2[AVRUNDET_TALL].klesplagg;
    const KJOLEPRIS = ARRAY2[AVRUNDET_TALL].pris;
    
    document.body.innerHTML = `
        <h1>Klesplagg: ${KJOLE}</h1>
        <p>Pris: ${KJOLEPRIS}</p>
    `
    
    const ARRAY3 = [
    {
        klesplagg: "Lue",
        pris: 199
    },
    {
        klesplagg: "Sokker",
        pris: 79
    }
    ]
    
    const SORT = [...ARRAY2, ...ARRAY3];
    