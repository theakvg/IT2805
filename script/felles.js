const headerAll = '<a id="logoLink" href="forside.html"><img id="logo" src="images/logo.png" alt="Logo"></a><div id="burgerMeny"><p class="burgerBeskrivelse">Kontaktinformasjon, beliggenhet, åpningstider og sosiale medier</p><a class="burgerValg" href="info.html">OM OSS</a><p class="burgerBeskrivelse">Her kan dere bestille bord hos oss</p><a class="burgerValg" href="bestilling.html">BESTILL BORD</a><p class="burgerBeskrivelse">Se hva vi har på menyen og hvilke allergener maten inneholder</p><a class="burgerValg" href="meny.html">MENY</a><p class="burgerBeskrivelse">Les litt om kafeens siste nyheter</p><a class="burgerValg" href="forside.html">FORSIDE</a></div><div id="burgerKnapp" onclick="showBurgerMeny()"><p>X</p></div>';
const footerAll = '<div><p><strong>Kontakt oss:</strong><br>431 56 761 <br>eliseraade@stemning.no</p></div><div><p><strong>Adresse:</strong><br>Noeveien 4B <br>1443 Drøbak</p></div><div><p><strong>Åpningstider:</strong><br>MAN-FRE: 10.00-19.00 <br>LØR: 10.00-18.00 <br>SØN: 12.00-18.00</p></div><div><p><strong>Sosiale medier:</strong></p><a href=""><img src="images/instagram.png" alt="Instagram"></a><a href="Facebook"><img src="images/facebook.png" alt=""></a></div>';
 //  All html'en til header og footer elementene ligger inne i disse const'ene. Dette er fordi det ikke er mulig å dele html kode mellom flere sider utenom på denne måten. 
 //  Hvis denne skal forandres på, anbefales det å lime den inn i et html dokument, gjøre forandringene, og lime det inn igjen. 
 
const sider = ["meny", "felles", "forside", "info", "bestilling"]; // liste med alle sidene, for alle header eller footer elemente skal hete header/footer + sidenavn. 

function includeHTML() {        // lager funksjonen
    for (i = 0; i < sider.length; i++) {    // sjekker antallet i listen "sider" og kjører gjennom hvert element. 
        let head = document.getElementById("header"+sider[i]);   // henter header elementet, hvor den får navnene fra listen sider, og gir den navnet head. Head får en ny verdi for hver "runde"
        let foot = document.getElementById("footer"+sider[i]);   // henter footer elementet, samme som over. 
        if (head != null){                  // sjekker om head elementet er lik null, for elementet vil være null for alle sidene uten om den siden scriptet kjører på. I tillegg så sjekker den kun header, da hvis header ikke er lik null, så er ikke footer lik null heller. 
            head.innerHTML = headerAll;     // tilegner header elementet hele headerAll. 
            foot.innerHTML = footerAll;     // tilegner footer elementet hele footerAll. 
        };
    };
};

includeHTML();      // kjører funksjonen


function showBurgerMeny() {
    let burgerMeny = document.getElementById("burgerMeny");
    console.log(burgerMeny);  
    if (burgerMeny.style.visibility === "visible") {
        burgerMeny.style.visibility = "hidden";
        console.log(burgerMeny.style.visibility);
    } else {
        burgerMeny.style.visibility = "visible";
        console.log(burgerMeny.style.visibility);
    };
    
};

 
