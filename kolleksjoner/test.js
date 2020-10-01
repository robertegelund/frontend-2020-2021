


function sendSkjema(event) {
    event.preventDefault();
}

skjema.addEventListener("submit", sendSkjema);

function hentId (evt) {
    console.log(evt.target.id);
}


button.addEventListener("click", hentId);
button.onclick = hentID;