const headerAll = '<header id="headerfelles"><a id="logoLink" href="forside.html"><img id="logo" src="images/logo.png" alt="Logo"></a><div id="navMeny"><p class="navBeskrivelse">Kontaktinformasjon, beliggenhet, åpningstider og sosiale medier</p><a class="navValg" href="info.html">OM OSS</a><p class="navBeskrivelse">Her kan dere bestille bord hos oss</p><a class="navValg" href="bestilling.html">BESTILL BORD</a><p class="navBeskrivelse">Se hva vi har på menyen og hvilke allergener maten inneholder</p><a class="navValg" href="meny.html">MENY</a><p class="navBeskrivelse">Les litt om kafeens siste nyheter</p><a class="navValg" href="forside.html">FORSIDE</a></div><div id="navKnapp" onclick="showBurgerMeny()"><img id="imgMeny" src="images/bestikkMeny.png" alt="bestikk" height="40" width="40"></div></header>'
const footerAll = '<div><p><strong>Kontakt oss:</strong><br>431 56 761 <br>eliseraade@stemning.no</p></div><div><p><strong>Adresse:</strong><br>Noeveien 4b <br>4113 Drøbak</p></div><div><p><strong>Åpningstider:</strong><br>MAN-FRE: 10.00-19.00 <br>LØR: 10.00-18.00 <br>SØN: 12.00-18.00</p></div><div><p><strong>Sosiale medier:</strong></p><a href="https://www.instagram.com/stemningkafe/""><img id="footerInstagram" src="images/instagram.png" alt="Instagram"></a><a href="https://www.facebook.com"><img id="footerFacebook" src="images/facebook.png" alt="Facebook"></a></div>';


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
    let imgMeny = document.getElementById("imgMeny");
    let navMeny = document.getElementById("navMeny");
    if (navMeny.style.visibility === "visible") {
        navMeny.style.visibility = "hidden";
        imgMeny.src = "images/bestikkMeny.png";
    } else {
        navMeny.style.visibility = "visible";
        imgMeny.src = "images/bestikkKryss.png";
    };
    
};



 
