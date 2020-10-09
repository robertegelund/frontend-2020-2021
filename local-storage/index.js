
// Lagrer enkeltverdier i localStorage
let key = "name";
let value = "Kevin";

localStorage.setItem(key, value);

let localValue = localStorage.getItem(key);
console.log(localValue);

// document.body.innerHTML += localValue;

///

let array = ["Kevin", "Robert", "Gløer"];
// For å legge array inn i localStorage, må jeg transformere det til en tekststreng (string)

let arrayAsString = JSON.stringify(array);
// console.log(arrayAsString);

// Legger vi arrayAsString inn i localStorage
localStorage.setItem("array", arrayAsString);

// console.log(localStorage.getItem("array"));

// Transformere fra tekststreng tilbake til array
let backToArray = JSON.parse(localStorage.getItem("array"));

console.log(backToArray);

backToArray.forEach (name => document.body.innerHTML += name);
localStorage.removeItem("array");

// Nytt eksempel kommer under her
let objectArray = [
    {
        klesplagg: "Kjole",
        pris: 399
    },
    {
        klesplagg: "Dress",
        pris: 5000
    },
    {
        klesplagg: "T-skjorte",
        pris: 299
    }
];

objectArray.forEach( item => console.log(item.klesplagg));