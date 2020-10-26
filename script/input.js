const submit = document.getElementById("submit");

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
dagensDato();

function dagensDato() {
    let dato = document.getElementById("dato");
    let n = new Date();
    minMonth = n.getMonth() + 1; 
    year = n.getFullYear();
    date = n.getDate();
    dato.min = year + "-" + minMonth + "-" + date;
    maxMonth = n.getMonth() + 4;
    if (maxMonth > 12) {
        maxMonth = maxMonth - 12; 
        year += 1; 
    };
    if (maxMonth < 10) {
        maxMonth = ("0" + (maxMonth)).slice(-2);
    };
    dato.max = year + "-" + maxMonth + "-" + date;
};

function riktigTid() {
    let tid = document.getElementById("tidspunkt");
    if (tid.validity.valid === false) {
        alert("Våre åpningstider er mellom 11.00 og 20.00, vennligst velg et tidspunkt mellom disse tidspunktene.");
    };
};

const listeSendInn = [["navn", "Navn", "Fyll inn navnet ditt"], ["mobil", "Mobil", "Fyll inn mobilnummeret"], ["email", "Email", "Fyll inn emailen din med riktig format: example@example.com"], ["antallBesokende", "Antall besøkende", "Antall besøkende kan ikke overstige 10. Hvis dere er flere enn 10, vennligst ring kafeen for å booke."], ["dato", "Dato", "Du kan bare booke bord fra dagens dato og tre måneder fram i tid"], ["tidspunkt", "Tidspunkt", "Våre åpningstider er mellom 11.00 og 20.00, vennligst bestill bord mellom disse tidspunktene"], ["kommentarer", "Kommentarer"]];
 


function alertInput(event) {

    event.preventDefault();
    console.log("??");
    let skrivUt = ""; 
    for (let i = 0; i < listeSendInn.length; i++) {
        let element = document.getElementById(listeSendInn[i][0]).value;
        console.log(element);
        skrivUt = skrivUt + "\n" + listeSendInn[i][1] + ": " + element; 
    };
    let start = "Du har sendt inn en bordbestilling. Bestillingen inneholdt:"
    let avslutning = "\nVi gleder oss til å se deg!";
    riktigTid();
    alert(start + skrivUt + avslutning);
};

