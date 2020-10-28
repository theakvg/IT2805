//Henter elementer fra HTML
let imgBK = document.getElementById("imgBK");
const classBytt = document.getElementsByClassName("classBytt");

//Settersrc til bildene som skal brukes i bildekarusellen i en liste
let bildeListe = [["images/Bildekarusell/forsidemat.jpg","Bilde av kaffekopp og gulrotkake. Hentet fra: https://www.pexels.com/photo/white-ceramic-cup-and-dessert-963755/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"] , ["images/Bildekarusell/forsidemat2.jpg","Bilde av et brett med en burger, pomfri med løkringer, dressing og salat. Hentet fra: https://www.pexels.com/photo/burger-on-brown-platter-2271106/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"], ["images/Bildekarusell/forsidemat3.jpg", "Bilde av wok som blir stekt. Hentet fra: https://www.pexels.com/photo/person-cooking-noodles-3054690/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"], ["images/Bildekarusell/forsidemat4.jpg", "Bilde av smørbrød. Hentet fra: https://www.pexels.com/photo/sandwich-and-slice-of-lemons-1603901/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"], ["images/Bildekarusell/forsidemat5.jpg", "Bilde av rå, rød fisk. Hentet fra: https://www.pexels.com/photo/food-sea-dinner-lunch-5014597/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"], ["images/Bildekarusell/forsidemat6.jpg", "Bilde av disken i en kafé. Hentet fra https://www.pexels.com/photo/people-in-cafeteria-2159065/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"]];

classBytt[0].addEventListener("click", tilVenstre); //Kjører funksjonen tilVenstre når knappen til venstre i karusellen klikkes på
classBytt[1].addEventListener("click", tilHoyre); //Kjører funksjonen tilHoyre når knappen til høyre i karusellen klikkes på

let slideInterval = setInterval(tilVenstre, 4000);

function tilVenstre() {
    let imgSrc = imgBK.getAttribute("src"); //Lager en variabel imgSrc som er lik src til bildet imgBK
    for (i = 0; i < bildeListe.length; i++){
        if (bildeListe[i][0] === imgSrc){
            let a = 0;
            if (i === 0) {
                a = bildeListe.length - 1; 
            } else {
                a = i - 1;
            }
            imgBK.src = bildeListe[a][0];
            imgBK.alt = bildeListe[a][1];
        }
    }
}

function tilHoyre() {
    let imgSrc = imgBK.getAttribute("src");
    for (let i = 0; i < bildeListe.length; i++){
        if (bildeListe[i][0] === imgSrc){
            let a = 0;
            if (i > bildeListe.length-2) {
                a = 0; 
            } else {
                a = i + 1;
            }
            imgBK.src = bildeListe[a][0];
            imgBK.alt = bildeListe[a][1];
        }
    }
}



