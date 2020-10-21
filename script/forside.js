const btnVenstre = document.getElementById("btnVenstre");
const btnHoyre = document.getElementById("btnHoyre"); 
let imgBK = document.getElementById("imgBK");
const classBytt = document.getElementsByClassName("classBytt");


let bildeListe = ["images/Bildekarusell/forsidemat.jpg", "images/Bildekarusell/forsidemat2.jpg", "images/Bildekarusell/forsidemat3.jpg", "images/Bildekarusell/forsidemat4.jpg", "images/Bildekarusell/forsidemat5.jpg"];

classBytt[0].addEventListener("click", tilVenstre, true);
classBytt[1].addEventListener("click", tilHoyre, true); 


function tilHoyre() {
    let imgSrc = imgBK.getAttribute("src");
    for (i = 0; i < bildeListe.length; i++){
        if (bildeListe[i] === imgSrc){
            let a = 0;
            if (i > bildeListe.length-2) {
                a = 0; 
                console.log(a + "0");
            } else {
                a = i + 1;
            };
            imgBK.src = bildeListe[a];
        };
    };
}; 
 function tilVenstre() {
    let imgSrc = imgBK.getAttribute("src");
    for (i = 0; i < bildeListe.length; i++){
        if (bildeListe[i] === imgSrc){
            let a = 0;
            if (i === 0) {
                a = bildeListe.length - 1; 
            } else {
                a = i - 1;
            };
            imgBK.src = bildeListe[a];
        };
    };
}; 


