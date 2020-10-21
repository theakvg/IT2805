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

function alertInput() {
    let tidspunkt = document.getElementById("tidspunkt");
    let dato = document.getElementById("dato");
    let navn = document.getElementById("navn");
    let mobil = document.getElementById("mobil");
    let email = document.getElementById("email");
    let antallBesokende = document.getElementById("antallBesokende");
    let kommentarer = document.getElementById("kommentarer");
    let a = "Du har sendt inn en bordbestilling. Bestillingen inneholdt: Navn:" + navn.value;
    alert(a);
};

// "Du har sendt inn en bordbestilling. Bestillingen inneholdt:" <br><br> " Navn:" navn.value "Mobil:" ${mobil.value} ${<br>} "Email:" ${email.value} ${<br>} Antall besøkende: ${antallBesokende.value} ${<br>} Dato: ${dato.value} ${<br>} Tidspunkt: ${tidspunkt.value} ${<br>} Vi gleder oss til å se deg!"