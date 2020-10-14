const headerAll = '<img src="images/logotest.png" alt="Logo"><a href="info.html">OM OSS</a><a href="bestilling.html">BESTILL BORD</a><a href="meny.html">MENY</a><a href="forside.html">FORSIDE</a>';
const footerAll = ' <div><p><strong>Kontakt oss:</strong><br>431 56 761 <br>eliseraade@stemning.no</p></div><div><p><strong>Adresse:</strong><br>Noeveien 4b <br>4113 Drøbak</p></div><div><p><strong>Åpningstider:</strong><br>MAN-FRE: 10.00-19.00 <br>LØR: 10.00-18.00 <br>SØN: 12.00-18.00</p></div><div><p><strong>Sosiale medier:</strong></p><a href=""><img src="images/instagram.png" alt="Instagram"></a><a href="Facebook"><img src="images/facebook.png" alt=""></a></div>';

let headerFelles = document.getElementById("headerFelles");
let footerFelles = document.getElementById("footerFelles");
let headerMeny = document.getElementById("headerMeny"); 

let sider = ["meny", "felles", "forside", "info", "bestilling"];

function check() {
    if (headerMeny != null){
        headerMeny.innerHTML = headerAll; 
    } else if (headerFelles != null) {
        footerFelles.innerHTML = footerAll; 
        headerFelles.innerHTML = headerAll;
    }
        
        
}

check();

