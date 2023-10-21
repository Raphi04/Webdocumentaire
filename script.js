function addHTML(divID, documentHTML) {
    document.getElementById(divID).innerHTML = `<object type="text/html" data="${documentHTML}"></object>`;
}


function changeWindow(newWindowID){
    let allWindows = document.querySelectorAll(".window");
    let newWindow = document.getElementById(newWindowID);
    allWindows.forEach(window => window.classList.add("windowDisable"));
    newWindow.classList.remove("windowDisable");
}