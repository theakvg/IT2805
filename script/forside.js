const btnVenstre = document.getElementById("btnVenstre");
const btnHoyre = document.getElementById("btnHoyre"); 
let imgBK = document.getElementById("imgBK");
const classBytt = document.getElementsByClassName("classBytt");


classBytt[0].addEventListener("click", mainByttBilde, true);
classBytt[1].addEventListener("click", mainByttBilde, true); 

let bildeListe = ["forsidemat.jpg", "forsidemat2.jpg", "logo.png", "nyhet1.png", "nyhet2.png"];

tall = 0; 

function nesteBilde(i) {
    imgBK.src = bildeListe[i];
};

function tilVenstre() {
     tall = tall -1; 
     nesteBilde(tall);
}; 
 function tilHøyre() {
     tall += 1; 
     nesteBilde(tall); 
 }; 

 function mainByttBilde() {
     console.log("for funka");
     if (btnVenstre.onclick === false) {
         console.log("venstre klikk");
     } else if (btnHoyre.onclick === true) {
         console.log("høyre klikk");
     };
 };

