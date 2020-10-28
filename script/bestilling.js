function datoFokus() {
    let dato = document.getElementById("dato");
    dato.setAttribute("max", "");
    dato.setAttribute("min", "");
    if (dato === document.activeElement) {
        dato.type="date";
    } else {
        dato.type="text";
    }
}

function tidspunktFokus() {
    let tidspunkt = document.getElementById("tidspunkt");
    tidspunkt.setAttribute("max", "11.00");
    tidspunkt.setAttribute("min", "20.00");
    if (tidspunkt === document.activeElement) {
        tidspunkt.type="time";
    } else {
        tidspunkt.type="text";
    }
}

dagensDato();

function dagensDato() {
    let dato = document.getElementById("dato");
    let n = new Date();
    let minMonth = n.getMonth() + 1; 
    let year = n.getFullYear();
    let date = n.getDate();
    dato.min = year + "-" + minMonth + "-" + date;
    let maxMonth = n.getMonth() + 4;
    
    if (maxMonth > 12) {
        maxMonth = maxMonth - 12; 
        year += 1; 
    }
    if (maxMonth < 10) {
        maxMonth = ("0" + (maxMonth)).slice(-2);
    }
    dato.max = year + "-" + maxMonth + "-" + date;
}

const listeSendInn = [["navn", "Navn", "Fyll inn navnet ditt"], ["mobil", "Mobil", "Fyll inn mobilnummeret"], ["email", "Email", "Fyll inn emailen din med riktig format: example@example.com"], ["antallBesokende", "Antall besøkende", "Antall besøkende må være mellom 1 og 10. Hvis dere er flere enn 10, vennligst ring kafeen for å booke."], ["dato", "Dato", "Du kan bare booke bord fra dagens dato og tre måneder fram i tid"], ["tidspunkt", "Tidspunkt", "Våre åpningstider er mellom 11.00 og 20.00, vennligst bestill bord til etter kl. 11 og før kl 19."], ["kommentarer", "Kommentarer"]];
 


function alertInput(event) {

    event.preventDefault();
    let skrivUt = ""; 
    let feilMelding = "";
    let oversikt = 0;
    for (let i = 0; i < listeSendInn.length; i++) {
        if (listeSendInn[i][0] === "tidspunkt") {
            let tidspunkt = document.getElementById("tidspunkt");
            let dato = document.getElementById("dato");
            let n = new Date();
            let time = n.getHours();
            let min = ("0" + (n.getMinutes())).slice(-2);
            let a = tidspunkt.value;
            let dagDato = n.getFullYear() + "-" + n.getMonth() + "-" + n.getDate();
            if ((a.slice(0, 2) < 11) || (a.slice(0, 2) >= 19)) {
                tidspunkt.setCustomValidity(false);            
            } else if ((a.slice(0, 2) < time) && (dagDato === dato.min)) {
                if (a.slice(3, 5) < min) {
                    tidspunkt.setCustomValidity(false);
                }
            } else {
                tidspunkt.setCustomValidity("");
            }
        }
        let element = document.getElementById(listeSendInn[i][0]);
        skrivUt = skrivUt + "\n" + listeSendInn[i][1] + ": " + element.value;
        if (element.validity.valid === false) {
            feilMelding += "\n" + listeSendInn[i][2];
            oversikt += 1;
        }
    }
    if (oversikt === 0) {
        let start = "Du har sendt inn en bordbestilling. Bestillingen inneholdt:";
        let avslutning = "\nVi gleder oss til å se deg!";
        alert(start + skrivUt + avslutning);
        for (let i = 0; i < listeSendInn.length; i++) {
            let element = document.getElementById(listeSendInn[i][0]);
            element.value = "";
        }
        
    } else {
        let feilStart = "Du har fått denne feilmelding: ";
        let feilAvslutt = "\nDu må rette opp i disse feilene før du sender bestillingen";
        alert(feilStart + feilMelding + feilAvslutt);
    }  
}

