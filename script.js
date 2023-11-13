// >Transition sur introduction_1 quand on lance le site
document.getElementById("introduction_1").classList.add("smoothTransition");

//Récupération de toutes les div dans la navigation
var navigation = document.querySelectorAll("#navigation > div");

//Variable nécessaire à l'utilisation des musiques
var musicState = "off";
var firstimeMusic = "true";

//Fonction pour relier deux fichier html (à supprimer plus tard)
function addHTML(divID, documentHTML) {
    document.getElementById(divID).innerHTML = `<object type="text/html" data="${documentHTML}" width="100%" height="3000px"></object>`;
}

//Fonctions qui s'occupent des comportements en fin de vidéo de présentation
function videoEnd(container) {
    let div = document.getElementById(container);
    div.classList.add("smoothTransition");
}

function restartVideo(videoID, container) {
    let div = document.getElementById(container);
    div.classList.remove("smoothTransition");
    let video = document.getElementById(videoID);
    video.pause();
    video.currentTime = 0;
    video.play();
}

//Fonction pour détecter sur quelle window on est pour mettre à jour la navigation
function wichWindow(window) {
    switch(window) {
        case "introduction_1" :
            navigation[0].classList.add("selected");
            break;

        case "introduction_2" :
            navigation[0].classList.add("selected");
            break;

        case "introduction_3" :
            navigation[0].classList.add("selected");
            break;

        case "introduction_4" :
            navigation[0].classList.add("selected");
            break;

        case "ruelle" :
            navigation[1].classList.add("selected");
            break;

        case "boutique" :
            navigation[2].classList.add("selected");
            break;

        case "sousSol" :
            navigation[3].classList.add("selected");
            break;

        case "bar" :
            navigation[4].classList.add("selected");
            break;
    }
}

//Fonction pour changer de window
function changeWindow(newWindowID){
    let allvideos = document.querySelectorAll("video");
    let allWindows = document.querySelectorAll(".window");
    let newWindow = document.getElementById(newWindowID);
    let div = document.getElementById("videoPresentationButtonContainer");
    
    div.classList.remove("smoothTransition");

    allvideos.forEach(function(video) {
        video.pause();
        video.currentTime = 0;
    });

    allWindows.forEach(function(window) {
         window.classList.add("windowDisable");
         window.classList.remove("smoothTransition")
        });
    
    navigation.forEach(function(navigation) {
        navigation.classList.remove("selected");
    });

    wichWindow(newWindowID);
    newWindow.classList.remove("windowDisable");
    setTimeout(() => {newWindow.classList.add("smoothTransition")}, 100);
}

//Fonctions pour play une musique (à tout modifier plus tard) 
function playMusic() {
    if (firstimeMusic == "true") {
        document.getElementById("music").play();
        document.getElementById("sound").src="ressources/main/soundOn.png";
        musicState = "on";
        firstimeMusic = "false"
    }
}
function musicStatement() {
    if (musicState == "off") {
        document.getElementById("music").play();
        document.getElementById("sound").src="ressources/main/soundOn.png";
        musicState = "on";
    } else {
        document.getElementById("music").pause()
        document.getElementById("sound").src="ressources/main/soundOff.png";
        musicState = "off";
    }
}

//Fonction pour afficher un popUp dans le jeu intéractif
function popUpDisplay(div, state) {
    popUp = document.getElementById(div);
    if (state == "open") {
        popUp.style.display = "flex";
    } else {
        popUp.style.display = "none";
    }
}