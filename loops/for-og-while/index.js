
for (let i = 1; i <= 4; i++) {
    document.body.innerHTML += `
        <div class="sirkel"></div>
   `
}

let variabel = 1;
while( variabel <= 4) {
    document.body.innerHTML += `
        <div class="firkant"></div>
   `
   variabel++;
}

const KLESPLAGG = ["Bukse", "Skjorte", "Dress", "Kjole"];
// console.log(KLESPLAGG);
// console.log(KLESPLAGG.length)

// for (let i = 0; i < KLESPLAGG.length; i++) {
    // console.log(KLESPLAGG[i]);
// }


// Opprett et array med valgfritt innhold
// Bruk en for-loop til å presentere dette innholdet i body-elementet
const DYR = ["Katt", "Hund", "Ku", "Hest"];

for (let i = 0; i < DYR.length; i++) {
    document.body.innerHTML += `
        <article>${DYR[i]}</article>
    `;
};