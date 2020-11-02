//Henter elementer fra HTML
let imgBK = document.getElementById("imgBK");
const classBytt = document.getElementsByClassName("classBytt");

//Settersrc til bildene som skal brukes i bildekarusellen i en liste
let bildeListe = [["images/Bildekarusell/forsidemat.jpg","Bilde av kaffekopp og gulrotkake. Hentet fra: https://www.pexels.com/photo/white-ceramic-cup-and-dessert-963755/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"] , ["images/Bildekarusell/forsidemat2.jpg","Bilde av et brett med en burger, pomfri med løkringer, dressing og salat. Hentet fra: https://www.pexels.com/photo/burger-on-brown-platter-2271106/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"], ["images/Bildekarusell/forsidemat3.jpg", "Bilde av wok som blir stekt. Hentet fra: https://www.pexels.com/photo/person-cooking-noodles-3054690/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"], ["images/Bildekarusell/forsidemat4.jpg", "Bilde av smørbrød. Hentet fra: https://www.pexels.com/photo/sandwich-and-slice-of-lemons-1603901/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"], ["images/Bildekarusell/forsidemat5.jpg", "Bilde av rå, rød fisk. Hentet fra: https://www.pexels.com/photo/food-sea-dinner-lunch-5014597/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"], ["images/Bildekarusell/forsidemat6.jpg", "Bilde av disken i en kafé. Hentet fra https://www.pexels.com/photo/people-in-cafeteria-2159065/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"]];

classBytt[0].addEventListener("click", tilVenstre); //Kjører funksjonen tilVenstre når knappen til venstre i karusellen klikkes på
classBytt[1].addEventListener("click", tilHoyre); //Kjører funksjonen tilHoyre når knappen til høyre i karusellen klikkes på


let slideInterval = setInterval(tilHoyre, 7000);        // En funksjon som etter 7 sekunder, kjører funksjonen tilHoyre

function tilVenstre() {
    let imgSrc = imgBK.getAttribute("src"); 
    for (i = 0; i < bildeListe.length; i++){        // For-løkke som kjører gjennom hele listen: bildeListe
        if (bildeListe[i][0] === imgSrc){           // Hvis imgSrc (som er sourcen til bildet som vises i bildekarusellen) er lik et element i listen, kjør funksjon
            let a = 0;
            if (i === 0) {                          // Hvis karusellen er på det første bildet, altså 0, kjør funksjon
                a = bildeListe.length - 1;          // Sett a til det siste elementet i listen
            } else {
                a = i - 1;                          // sett a til et element tidligere i listen
            }
            imgBK.src = bildeListe[a][0];           // Sett ny source til karusellen, altså bytt bildet
            imgBK.alt = bildeListe[a][1];           // Sett tilsvarende alt tekst til bildet, som ligger i samme funksjon
        }
    }
}

function tilHoyre() {                       
    let imgSrc = imgBK.getAttribute("src");
    for (let i = 0; i < bildeListe.length; i++){    // For-løkke som kjører gjennom hele listen: bildeListe
        if (bildeListe[i][0] === imgSrc){           // Hvis imgSrc (som er sourcen til bildet som vises i bildekarusellen) er lik et element i listen, kjør funksjon
            let a = 0;
            if (i > bildeListe.length-2) {          // Hvis karusellen er på det siste bildet, altså lengden på listen, kjør funksjon
                a = 0;                              // Sett a til det første elementet i listen, altså 0
            } else {
                a = i + 1;                          // sett a til et element senere i listen
            }
            imgBK.src = bildeListe[a][0];           // Sett ny source til karusellen, altså bytt bildet
            imgBK.alt = bildeListe[a][1];           // Sett tilsvarende alt tekst til bildet, som ligger i samme funksjon
        }
    }
    
}



