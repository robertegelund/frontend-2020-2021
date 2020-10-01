// Se på et array som en liste med verdier
const ARRAY = ["Katt", "Hund", "Ku", "Hest"];

// Man kan endre verdier på en spesifikk posisjon
ARRAY[0] = "Giraff";
// console.log(ARRAY);

const ARRAY2 = [
    {   
        klesplagg: "Kjole",
        pris: 100
    },
    {
        klesplagg: "Dress",
        pris: 5000
    },
    {
        klesplagg: "Skjorte",
        pris: 499
    },
    {
        klesplagg: "T-skjorte",
        pris: 299
    }
]

// Lager et tilfeldig tall mellom 0 og 1
const TILFELDIG_TALL = Math.random();

// Sørger for at tilfeldig tall tilpasses lengden til arrayet
const TILPASSET_TALL = Math.random() * ARRAY2.length

// Runder av det tilpassede tallet NED til nærmeste heltall 
const AVRUNDET_TALL = Math.floor(TILPASSET_TALL);

// Velger klesplagg med tilhørende pris på basis av det tilfeldige, tilpassede og avrundede tallet
const KJOLE = ARRAY2[AVRUNDET_TALL].klesplagg;
const KJOLEPRIS = ARRAY2[AVRUNDET_TALL].pris;

// Tilfeldig nettsideinnhold basert på tilfeldig tall
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


const SORTIMENT = [...ARRAY2, ...ARRAY3];

// Her lager vi en kopi i stedet for en referanse til arrayet
const ARRAY_KOPI = [...ARRAY3];



// Vi henter ut verdien som ligger på plass 0 (har indeks 0) i arrayet
// const KATT = ARRAY[0];


// Push legger til verdi i slutten av arrayet
// ARRAY.push("Rådyr");


// Pop fjerner en verdi i slutten av arrayet
// const DELETED = ARRAY.pop()
// console.log(DELETED);

// console.log(ARRAY);
// const SLETTET = ARRAY.splice(2, 1);
// console.log(ARRAY);

// console.log(SLETTET);


// Bruker shift til å fjerne den første verdien i arrayet
// ARRAY.shift();
// console.log(ARRAY);

// Bruker unshift() til å legge til en verdi i starten av arrayet
// ARRAY.unshift("Katt");
// console.log(ARRAY);


// Push() legger til på slutten av arrayet
// Unshift() legger til på starten av arrayet
// Shift() fjerner første verdi i arrayet
// Pop() fjerner siste verdien i arrayet
// Splice() --- Angir du fra og med hvilket element (posisjon) den skal slette samt hvor mange som skal slettes (etter komma). Du kan også legge til elementer med Splice (søk og sjekk).

// Disse metodene endrer hvordan arrayet ser ut

// Henter ut verdier med [], f.eks. [0] eller [1] o.s.v.

// Du kan lage arrys med objekter, sånn som dette her f.eks.: [{}, {}, {}]