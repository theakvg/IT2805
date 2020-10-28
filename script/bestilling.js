/*Endrer type på input-feltet fra text til dato når man hovrer over eller hvis feltet er fokusert*/
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
/*Endrer type på input-feltet fra text til tine når man hovrer over eller hvis feltet er fokusert*/
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

// Funksjon som henter ut dagens dato, og setter minimums og maksimum verdi på dato inputfeltet
function dagensDato() {                         // Definerer funksjonen
    let dato = document.getElementById("dato"); // Henter inputelementet dato fra html
    let n = new Date();                         // Setter n som dagens dato, med en innebygd funksjon fra js som henter ut datoen pluss mer
    let minMonth = n.getMonth() + 1;            // Henter ut kun måneden fra n. Må legge til 1, da man får feil ellers. 
    let year = n.getFullYear();                 // Henter ut kun året
    let date = n.getDate();                     // Henter ut kun dagens dato
    dato.min = year + "-" + minMonth + "-" + date;  // Setter året, måneden og datoen sammen, i samme format som input elementet dato trenger. Setter dette som minimum
    let maxMonth = n.getMonth() + 4;            // Setter maks måned for 3 måneder fram i tid.
    if (maxMonth > 12) {                        // En if løkke, som kjører hvis maks måned er over 12. 
        maxMonth = maxMonth - 12;               // Setter maks måned det antall den er over 12. 
        year += 1;                              // Setter year for et år senere. 
    }
    if (maxMonth < 10) {                        // En if løkke som kjører hvis maks måned er under 10
        maxMonth = ("0" + (maxMonth)).slice(-2);  // Legger til en 0 forran tallet hvis det ikke er tosifret tall. Dette må skje siden formatet til dato min og max er slik. 
    }                                             // Kode hentet fra: https://l.facebook.com/l.php?u=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F6040515%2Fhow-do-i-get-month-and-date-of-javascript-in-2-digit-format%3Ffbclid%3DIwAR0OLd7E0XsYMDE12e8r9hno6bZFD8EBxUocPel5pHt0gPe9BXT1UiL58mI&h=AT2w0DCmrTI4D0wL2bDTFyGN3IS_3BVzy2iLab0VP3VMCHE0tq6I1Lc_FzNNXw_X4vSiUYS0IfmQP4sVtxACLDJ9REHhs4VizOWWM-94yGqoueb5k_4lv-Td7RsQimouXIoe_h1OFe5umlmRPT5OGA
    dato.max = year + "-" + maxMonth + "-" + date;  // Setter året, maks måned og datoen sammen, i samme format som input elementet dato trenger. Setter dette som maksimum
}
dagensDato();  // Kjører funksjonen dagensDato()

// Listen over alle inputelementene sitt id navn, oversiktsnavn og feilmelding
const listeSendInn = [["navn", "Navn", "Fyll inn navnet ditt"], ["mobil", "Mobil", "Fyll inn mobilnummeret"], ["email", "Email", "Fyll inn emailen din med riktig format: example@example.com"], ["antallBesokende", "Antall besøkende", "Antall besøkende må være mellom 1 og 10. Hvis dere er flere enn 10, vennligst ring kafeen for å booke."], ["dato", "Dato", "Du kan bare booke bord fra dagens dato og tre måneder fram i tid"], ["tidspunkt", "Tidspunkt", "Våre åpningstider er mellom 11.00 og 20.00, vennligst bestill bord til etter kl. 11 og før kl 19."], ["kommentarer", "Kommentarer"]];
 
// Funksjon som 
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

