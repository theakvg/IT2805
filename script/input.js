const submit = document.getElementById("submit");



submit.onclick = alertInput();



function datoFocus() {
    let dato = document.getElementById("dato");
    if (dato === document.activeElement) {
        dato.type="date";
    } else {
        dato.type="text";
    };
};

function tidspunktFocus() {
    let tidspunkt = document.getElementById("tidspunkt");
    if (tidspunkt === document.activeElement) {
        tidspunkt.type="time";
    } else {
        tidspunkt.type="text";
    };
};

// https://stackoverflow.com/questions/19122886/how-can-i-create-a-custom-message-when-an-html5-required-input-pattern-does-not
function feilMeldingTid() {
    // SENERE
};

function alertInput(event) {
    
    let tidspunkt = document.getElementById("tidspunkt").value;
    let dato = document.getElementById("dato").value;
    let navn = document.getElementById("navn").value;
    let mobil = document.getElementById("mobil").value;
    let email = document.getElementById("email").value;
    let antallBesokende = document.getElementById("antallBesokende").value;
    let kommentarer = document.getElementById("kommentarer").value;
    let a = "Du har sendt inn en bordbestilling. Bestillingen inneholdt: \nNavn: " + navn + "\nMobil: " + mobil + "\nEmail: " + email + " \nAntall besøkende: " + antallBesokende + "\nDato: " + dato + "\nTidspunkt: " + tidspunkt + "\nKommentar: " + kommentarer + "\nVi gleder oss til å se deg!";
    event.preventDefault();
    alert(a);
    
};

// 