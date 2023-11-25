// Transition sur introduction_1 quand on lance le site
setTimeout(() => {document.getElementById("introduction_1").classList.add("smoothTransition")}, 200);

//Récupération de toutes les div dans la navigation
var navigation = document.querySelectorAll("#navigation > div");

//Variable nécessaire à l'utilisation des musiques
var streetMusic = document.getElementById("streetMusic");
var doorSound = document.getElementById("doorSound");
var jazzMusic = document.getElementById("jazzMusic");
var jazzMusicEtouffe = document.getElementById("jazzMusicEtouffe");
var allMusic = document.querySelectorAll(".music");
var musicState = "on";
var currentMusic;

//Variable nécessaire aux MoreInfo
var lastWindow;

//Fonction pour relier deux fichier html (à supprimer plus tard)
function addHTML(divID, documentHTML) {
    document.getElementById(divID).innerHTML = `<object type="text/html" data="${documentHTML}" width="100%" height="10000px"></object>`;
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

//Fonction pour arreter toutes les musiques
function stopAllMusic(exeption){
    if(exeption == "true") {
        streetMusic.pause();
        streetMusic.currentTime = 0;
    } else {
        allMusic.forEach(function(music) {
            music.pause();
            music.currentTime = 0;
        })
    }
}

//fonction pour jouer le sound effect de la cloche
function playRing(){
    doorSound.play();
}

//Fonction pour détecter sur quelle window on est pour mettre à jour la navigation
function wichWindow(window) {
    switch(window) {
        case "introduction_1" :
            navigation[0].classList.add("selected");
            stopAllMusic("false");
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
            stopAllMusic("false");
            if (musicState == "on"){
                streetMusic.play();
            }
            currentMusic = streetMusic;
            break;

        case "boutique" :
            navigation[2].classList.add("selected");
            stopAllMusic("true");
            if (jazzMusicEtouffe.currentTime > 0){
                jazzMusic.currentTime = jazzMusicEtouffe.currentTime;
                jazzMusicEtouffe.currentTime = 0;
                jazzMusicEtouffe.pause();
                if (musicState == "on"){
                    jazzMusic.play();
                }
                currentMusic = jazzMusic;
            } else {
                if (musicState == "on"){
                    jazzMusic.play();
                }
                currentMusic = jazzMusic;
            }
            break;

        case "sousSol" :
            navigation[3].classList.add("selected");
            if (jazzMusic.currentTime > 0){
                jazzMusicEtouffe.currentTime = jazzMusic.currentTime;
                jazzMusic.currentTime = 0;
                jazzMusic.pause();
                if (musicState == "on") {
                    jazzMusicEtouffe.play();
                }
                currentMusic = jazzMusicEtouffe;
            } else {
                if (musicState == "on") {
                    jazzMusicEtouffe.play();
                }
                currentMusic = jazzMusicEtouffe;
            }
            break;

        case "bar" :
            navigation[4].classList.add("selected");
            if (jazzMusicEtouffe.currentTime > 0){
                jazzMusic.currentTime = jazzMusicEtouffe.currentTime;
                jazzMusicEtouffe.currentTime = 0;
                jazzMusicEtouffe.pause();
                if (musicState == "on") {
                    jazzMusic.play()
                }
                currentMusic = jazzMusic;
            } else {
                if (musicState == "on") {
                    jazzMusic.play();
                }
                currentMusic = jazzMusic;
            }
            break;
    }
}

//Fonction pour garder la dernière window
function saveLastWindow(window){
    lastWindow = document.getElementById(window);
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
    if(newWindowID == "lastWindow"){
        lastWindow.classList.remove("windowDisable");
        setTimeout(() => {lastWindow.classList.add("smoothTransition")}, 100);
    }else {
        newWindow.classList.remove("windowDisable");
        setTimeout(() => {newWindow.classList.add("smoothTransition")}, 100);
    }
}

//Fonctions pour play une musique (à tout modifier plus tard) 
function playMusic(window) {
    if (firstimeMusic == "true") {
        document.getElementById("music").play();
        document.getElementById("sound").src="ressources/main/soundOn.png";
        musicState = "on";
        firstimeMusic = "false"
    }
}
function musicStatement() {
    if (musicState == "off") {
        document.getElementById("sound").src="ressources/main/soundOn.png";
        musicState = "on";
        currentMusic.play();
    } else {
        document.getElementById("sound").src="ressources/main/soundOff.png";
        musicState = "off";
        currentMusic.pause();
    }
}

//Fonction pour afficher un popUp dans le jeu intéractif
function popUpDisplay(div, state) {
    let popUp = document.getElementById(div);
    let sacCafe = document.getElementById("sacCafé");
    if (state == "open") {
        popUp.style.display = "flex";
        sacCafe.style.zIndex = 300;

    } else {
        popUp.style.display = "none";
        sacCafe.style.zIndex = 1;
    }
}