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

const listeSendInn = ["tidspunkt", "dato", "navn", "mobil", "email", "antallBesokende", "kommentarer"];
submit.onclick = alertInput();
function alertInput(event) {
    
    let skrivUt = ""; 
    for (let i = 0; i < listeSendInn.length; i++) {
        let element = document.getElementById(listeSendInn[i]).value;
        console.log(element);
        skrivUt = skrivUt + "\n" + listeSendInn[i] + ": " + element; 
    };
    let start = "Du har sendt inn en bordbestilling. Bestillingen inneholdt:"
    let avslutning = "\nVi gleder oss til å se deg!";
    event.preventDefault();
    alert(start + skrivUt + avslutning);
};

