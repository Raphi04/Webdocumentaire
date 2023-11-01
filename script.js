var musicState = "off";
var firstimeMusic = "true"

function addHTML(divID, documentHTML) {
    document.getElementById(divID).innerHTML = `<object type="text/html" data="${documentHTML}" width="100%" height="3000px"></object>`;
}


function changeWindow(newWindowID){
    let allWindows = document.querySelectorAll(".window");
    let newWindow = document.getElementById(newWindowID);
    allWindows.forEach(window => window.classList.add("windowDisable"));
    newWindow.classList.remove("windowDisable");
}

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