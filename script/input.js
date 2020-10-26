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

//function riktigTid() {
//    let tid = document.getElementById("tidspunkt");
//    if (tid.validity.valid === false) {
//        alert("Våre åpningstider er mellom 11.00 og 20.00, vennligst velg et tidspunkt mellom disse tidspunktene.");
//    };
//};

const listeSendInn = [["navn", "Navn", "Fyll inn navnet ditt"], ["mobil", "Mobil", "Fyll inn mobilnummeret"], ["email", "Email", "Fyll inn emailen din med riktig format: example@example.com"], ["antallBesokende", "Antall besøkende", "Antall besøkende må være mellom 1 og 10. Hvis dere er flere enn 10, vennligst ring kafeen for å booke."], ["dato", "Dato", "Du kan bare booke bord fra dagens dato og tre måneder fram i tid"], ["tidspunkt", "Tidspunkt", "Våre åpningstider er mellom 11.00 og 20.00, vennligst bestill bord til etter kl. 11 og før kl 19."], ["kommentarer", "Kommentarer"]];
 


function alertInput(event) {

    event.preventDefault();
    console.log("??");
    let skrivUt = ""; 
    let feilMelding = "";
    let oversikt = 0;
    for (let i = 0; i < listeSendInn.length; i++) {
        if (listeSendInn[i][0] === "tidspunkt") {
            let tid = document.getElementById("tidspunkt");
            let dato = document.getElementById("dato");
            let n = new Date();
            let time = n.getHours();
            let min = ("0" + (n.getMinutes())).slice(-2);
            let a = tid.value;
            let dagDato = n.getFullYear() + "-" + n.getMonth() + "-" + n.getDate();
            console.log(a);
            if ((a.slice(0, 2) < 11) || (a.slice(0, 2) >= 19)) {
                console.log((a.slice(0, 2)) + "wtf");
                console.log("wtf");
                tidspunkt.setCustomValidity(false);
                
            } else if ((a.slice(0, 2) < time) && (dagDato === dato.min)) {
                console.log("wtf2");
                if (a.slice(3, 5) < min) {
                    tidspunkt.setCustomValidity(false);
                    console.log("whyy tidspunkt"); 
                };
            } else {
                console.log("FUNK")
                tidspunkt.setCustomValidity("");
                console.log(tidspunkt.validity.valid);
            }
        };
        let element = document.getElementById(listeSendInn[i][0]);
        skrivUt = skrivUt + "\n" + listeSendInn[i][1] + ": " + element.value;
        console.log(listeSendInn[i][0] + " " + element.validity.valid); 
        if (element.validity.valid === false) {
            feilMelding += "\n" + listeSendInn[i][2];
            oversikt += 1;
        };
    };
    if (oversikt === 0) {
        let start = "Du har sendt inn en bordbestilling. Bestillingen inneholdt:"
        let avslutning = "\nVi gleder oss til å se deg!";
        alert(start + skrivUt + avslutning);
        for (let i = 0; i < listeSendInn.length; i++) {
            let element = document.getElementById(listeSendInn[i][0]);
            element.value = "";
        };
        
    } else {
        let feilStart = "Du har fått denne feilmelding: ";
        let feilAvslutt = "\nDu må rette opp i disse feilene før du sender bestillingen";
        alert(feilStart + feilMelding + feilAvslutt);
    };
    
    
    
};

