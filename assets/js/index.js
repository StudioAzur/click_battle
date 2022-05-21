// On récupère nos éléments
let parent = document.getElementById("parent");
let enfant = document.getElementById("enfant");
let nbClickParent = document.querySelector("#nbClickParent");
let nbClickEnfant = document.querySelector("#nbClickEnfant");
let restart = document.querySelector("#restart");

// On initialise nos deux compteurs
let compteurParent = 0;
let compteurEnfant = 0;

// On ajoute un écouteur d'événement sur les éléments du DOM
parent.addEventListener("click", () => {
  compteurParent++;
  nbClickParent.innerHTML = compteurParent;
  document.title = `parent : ${compteurParent} enfant : ${compteurEnfant}`;
});

enfant.addEventListener("click", (e) =>{
    e.preventDefault();
    e.stopPropagation();
    compteurEnfant++;
    nbClickEnfant.innerHTML = compteurEnfant;
    console.log(`parent : ${compteurParent} enfant : ${compteurEnfant}`);
})

// On crée notre bouton de réinitialisation 
restart.addEventListener("click", (e) =>{
    compteurParent = 0;
    compteurEnfant = 0;
    nbClickParent.innerHTML = compteurParent;
    nbClickEnfant.innerHTML = compteurEnfant;
    document.title = "La Bataille des Clics"
    console.clear();
})