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

let datMax = "";
let datMin = "";

// Funksjon som henter ut dagens dato, og setter minimums og maksimum verdi på dato inputfeltet
function dagensDato() {                         // Definerer funksjonen
    let dato = document.getElementById("dato"); // Henter inputelementet dato fra html
    let n = new Date();                         // Setter n som dagens dato, med en innebygd funksjon fra js som henter ut datoen pluss mer
    let minMonth = n.getMonth() + 1;            // Henter ut kun måneden fra n. Må legge til 1, da man får feil ellers. 
    let year = n.getFullYear();                 // Henter ut kun året
    let date = n.getDate();                     // Henter ut kun dagens dato
    if (date < 10) {                        // En if løkke som kjører hvis maks måned er under 10
        date = ("0" + (date)).slice(-2);  // Legger til en 0 forran tallet hvis det ikke er tosifret tall. Dette må skje siden formatet til dato min og max er slik. 
    }                                             // Kode hentet fra: https://l.facebook.com/l.php?u=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F6040515%2Fhow-do-i-get-month-and-date-of-javascript-in-2-digit-format%3Ffbclid%3DIwAR0OLd7E0XsYMDE12e8r9hno6bZFD8EBxUocPel5pHt0gPe9BXT1UiL58mI&h=AT2w0DCmrTI4D0wL2bDTFyGN3IS_3BVzy2iLab0VP3VMCHE0tq6I1Lc_FzNNXw_X4vSiUYS0IfmQP4sVtxACLDJ9REHhs4VizOWWM-94yGqoueb5k_4lv-Td7RsQimouXIoe_h1OFe5umlmRPT5OGA   
    dato.min = year + "-" + minMonth + "-" + date;  // Setter året, måneden og datoen sammen, i samme format som input elementet dato trenger. Setter dette som minimum
    let maxMonth = n.getMonth() + 5;            // Setter maks måned for 3 måneder fram i tid.
    if (maxMonth > 12) {                        // En if løkke, som kjører hvis maks måned er over 12. 
        maxMonth = maxMonth - 12;               // Setter maks måned det antall den er over 12. 
        year += 1;                              // Setter year for et år senere. 
    }
    if (maxMonth < 10) {                        // En if løkke som kjører hvis maks måned er under 10
        maxMonth = ("0" + (maxMonth)).slice(-2);  // Legger til en 0 forran tallet hvis det ikke er tosifret tall. Dette må skje siden formatet til dato min og max er slik. 
    }                                             // Kode hentet fra: https://l.facebook.com/l.php?u=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F6040515%2Fhow-do-i-get-month-and-date-of-javascript-in-2-digit-format%3Ffbclid%3DIwAR0OLd7E0XsYMDE12e8r9hno6bZFD8EBxUocPel5pHt0gPe9BXT1UiL58mI&h=AT2w0DCmrTI4D0wL2bDTFyGN3IS_3BVzy2iLab0VP3VMCHE0tq6I1Lc_FzNNXw_X4vSiUYS0IfmQP4sVtxACLDJ9REHhs4VizOWWM-94yGqoueb5k_4lv-Td7RsQimouXIoe_h1OFe5umlmRPT5OGA
    dato.max = year + "-" + maxMonth + "-" + date;  // Setter året, maks måned og datoen sammen, i samme format som input elementet dato trenger. Setter dette som maksimum
    datMax = dato.max;
    datMin = dato.min;
    console.log(datMax, datMin);
}
dagensDato();  // Kjører funksjonen dagensDato()

// Listen over alle inputelementene sitt id navn, oversiktsnavn og feilmelding
const listeSendInn = [["navn", "Navn", "Fyll inn navnet ditt"], ["mobil", "Mobil", "Fyll inn mobilnummeret"], ["email", "Email", "Fyll inn emailen din med riktig format: example@example.com"], ["antallBesokende", "Antall besøkende", "Antall besøkende må være mellom 1 og 10. Hvis dere er flere enn 10, vennligst ring kafeen for å booke."], ["dato", "Dato", "Du kan bare booke bord fra dagens dato og fire måneder fram i tid"], ["tidspunkt", "Tidspunkt", "Våre åpningstider er mellom 11.00 og 20.00, vennligst bestill bord til etter kl. 11 og før kl 19. Det er heller ikke mulig å bestille tid for tidligere idag."], ["kommentarer", "Kommentarer"]];

// Funksjon som sjekker om tiden er innenfor riktig ramme (mellom 11 og 19), og hvis det er dagens dato: om tiden satt i input feltet er etter den faktiske tiden
function tidSjekk (i) {
    if (listeSendInn[i][0] === "tidspunkt") {                       // Kjører gjennom alle elementene i listen listeSendInn
        let tidspunkt = document.getElementById("tidspunkt");       // Henter inputfeltet tidspunkt fra html
        let dato = document.getElementById("dato");                 // Henter inputfeltet dato fra html 
        let n = new Date();                                         // Setter n som dagens dato, med en innebygd funksjon fra js som henter ut datoen pluss mer
        let time = n.getHours();                                    // Henter ut kun timer fra n
        let min = ("0" + (n.getMinutes())).slice(-2);               // Henter ut kun minutter, og legger til en 0 forran hvis tallet er under 10
        let a = tidspunkt.value;                                    // Henter ut verdien som ligger i inputfeltet tidspunkt (altså tiden)
        if ((a.slice(0, 2) < 11) || (a.slice(0, 2) >= 19)) {        // Hvis tiden hentet ut fra inputfeltet er mindre enn 11 og høyere enn 19, kjør funksjon
            tidspunkt.setCustomValidity(false);                     // Sett gyldigheten til tidspunkt til false
        } else if ((a.slice(0, 2) < time) && (dato.value === datMin)) {     // Hvis tiden hentet fra input er mindre en den faktiske tiden OG dagens dato er den samme som datoen i inputfeltet, kjør funksjon
            if (time === a.slice(0, 2)) {                           // Hvis timen er lik timen fra input, kjør funksjon 
                if (a.slice(3, 5) < min) {                          // Hvis minutter fra inputfeltet er mindre enn minutter fra den faktiske tiden, kjør funksjon
                    tidspunkt.setCustomValidity(false);             // Sett gylidgheten til tidspunkt til false
                } else {
                    tidspunkt.setCustomValidity("");                // Sett gylidheten til tidspunkt til ingenting / true
                }
            } else {
                tidspunkt.setCustomValidity(false);                 // Sett gylidgheten til tidspunkt til false
            }
        } else {
            tidspunkt.setCustomValidity("");                        // Sett gylidheten til tidspunkt til ingenting / true
        }
    }
}

// Funksjonen sjekker om datoen er før, samme eller etter dagens dato
function dagSjekk(dato) {
    if (dato.value.slice(5, 7) === datMin.slice(5, 7)) {                // Hvis måned hentet fra dagens dato er lik måned hentet fra input dato, kjør funksjon
        if (dato.value.slice(8, 10) < datMin.slice(8, 10)) {            // Hvis dag hentet fra dato er lik dato hentet fra input dato, kjør funksjon
            dato.setCustomValidity(false);                              // Sett gyldigheten til dato til false
        }
        else {
            console.log(dato.value.slice(8, 10), datMin.slice(8, 10));
            dato.setCustomValidity("");                                 // Sett gyldighet til dato til ingenting / true
        }
    } else if (dato.value.slice(8, 10) > datMax.slice(8, 10)) {         // Hvis dag hentet ut fra dato input er større en dag hentet ut fra dato max, kjør funksjon
        if (dato.value.slice(5, 7) === datMax.slice(5, 7)) {            // Hvis måned hentet ut fra dato input er lik måned hentet ut fra dato mac
            dato.setCustomValidity(false);                              // Sett gyldigheten til dato til false
        }
        else {
            dato.setCustomValidity("");                                 // Sett gyldighet til dato til ingenting / true
        }
    } else {
        dato.setCustomValidity("");                                     // Sett gyldighet til dato til ingenting / true
    }
}

function datoSjekk (i) {
    if (listeSendInn[i][0] === "dato") {                                // Hvis listen sitt output matcher "dato", kjør funksjon
        let dato = document.getElementById("dato");                     // Henter inputfeltet dato fra html
        if ((dato.value.slice(0, 4) < datMin.slice(0, 4)) || (dato.value.slice(0, 4) > datMax.slice(0, 4))) {       // Hvis årstall fra input er mindre enn årstall fra dato minimum, eller hvis årstall fra input er større en årstall fra dato max
            dato.setCustomValidity(false);                              // Sett gyldigheten til dato til false
        } else if (datMin.slice(5, 7) < datMax.slice(5, 7)) {           // Hvis måned fra dato minimum er mindre enn måned fra dato max, kjør funksjin
            if ((dato.value.slice(5, 7) < datMin.slice(5, 7)) || (dato.value.slice(5, 7) > datMax.slice(5, 7))) {   // Hvis måned fra input er mindre enn måned fra dato minimum eller hvis måned fra input er større en måned fra dato max
                dato.setCustomValidity(false);                          // Sett gyldigheten til dato til false
            } else {
                dagSjekk(dato);                                         // Kjør funksjon dagSjekk
            }
        } else if (datMin.slice(5, 7) > datMax.slice(5, 7)) {           // Hvis måned fra dato minimum er større en måned fra dato max
            if ((dato.value.slice(5, 7) < datMin.slice(5, 7)) && (dato.value.slice(5, 7) > datMax.slice(5, 7))) {   // Hvis måned fra input er mindre enn måned fra dato minimum OG måned fra input er større en måned fra dato max
                dato.setCustomValidity(false);                          // Sett gyldigheten til dato til false
            } else {
                dagSjekk(dato);                                         // Kjør funksjon dagSjekk
            }
        } else {
            dato.setCustomValidity("");                                 // Sett gyldighet til dato til ingenting / true
        }
    }
}

// Funksjon som sjekker inputelementene og sender en alert 
function alertInput(event) {
    event.preventDefault();                                             // Et innebygd element i js, som hindrer at funksjonen kjører når man oppdaterer siden
    let skrivUt = "";                                                   // Definerer variabelen skrivUt som en string og setter den til ingenting
    let feilMelding = "";                                               // Definerer variabelen feilMelding som en string og setter den til ingenting
    let oversikt = 0;                                                   // Definerer variabelen oversikt som et tall, og setter den til 0
    for (let i = 0; i < listeSendInn.length; i++) {                     // En for-løkke som kjører gjennom listen listeSendInn
        tidSjekk(i);                                                    // Kjører funksjonen tidSjekk og sender med variabelen i
        datoSjekk(i);                                                   // Kjører funksjonen datoSjekk og sender med variabelen i
        let element = document.getElementById(listeSendInn[i][0]);      // Definerer variabelen element med inputelementene i html ved hjelp av navn som den henter ut fra listen listeSendInn
        skrivUt = skrivUt + "\n" + listeSendInn[i][1] + ": " + element.value;           // Setter skrivUt som seg selv pluss et linjeskift, navnet på inputfeltet og verdien som er satt inn i inputfeltet
        if (element.validity.valid === false) {                         // Hvis elementet sin validitet er lik false, kjør funksjon
            feilMelding += "\n" + listeSendInn[i][2];                   // Skriv til feilMelding et linjeskift, og feilmeldingen som tilhører elementet som ligger i listen listeSendInn
            oversikt += 1;                                              // Legg til 1 på oversikt
        }
    }
    if (oversikt === 0) {                                               // Hvis oversikt er lik 0, kjør funksjon
        let start = "Du har sendt inn en bordbestilling. Bestillingen inneholdt:";      // Definer variabelen start, og legg til en string
        let avslutning = "\nVi gleder oss til å se deg!";               // Definer variabelen avslutning, og legg til en string
        alert(start + skrivUt + avslutning);                            // Lag en alert som inneholder start, skrivUt og avslutning
        for (let i = 0; i < listeSendInn.length; i++) {                 // En for-løkke som kjører gjennom listen listeSendInn
            let element = document.getElementById(listeSendInn[i][0]);  // Definer variabelen element med inputelementet i html ved hjelp av navn som den henter ut fra listen listeSendInn
            element.value = "";                                         // Sett elementet til tomt. Dette gjør at informasjonen som ligger i inputfeltet blir borte
        }
        
    } else {
        let feilStart = "Du har fått denne feilmelding: ";              // Definer variabelen feilStart, og legg til en string 
        let feilAvslutt = "\nDu må rette opp i disse feilene før du sender bestillingen";   // Definer variabelen feilAvslutt, og legg til en string 
        alert(feilStart + feilMelding + feilAvslutt);                   // Lag en alert som inneholder feilStart, feilMelding, feilAvslutt
    }  
}

