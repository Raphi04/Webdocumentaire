// Fonctions de scroll d'images
function arrowScroll(scrollerNumber, direction) {

    // Get current image and scroller
    if (scrollerNumber = "N1") {
        scrollerSection = document.getElementById("scrollerSection1");
        imgName = "img";
        ballName = "ball";
    }
    else if (scrollerNumber = "N2") {
        scrollerSection = document.getElementById("scrollerSection2");
        imgName = "img2_";
        ballName = "ball2_";
    }
    currentImg = Number(scrollerSection.getAttribute("value"));
    maxImg = Number(scrollerSection.getAttribute("maxValue"));

    // Scrolling left or right
    if (direction == "left") {
        newImg = currentImg - 1;
        if (newImg == 0) {
            newImg = maxImg;
        }
        newImgName = imgName + newImg;
        document.getElementById(newImgName).scrollIntoView({block: "nearest", inline: "nearest"});
        scrollerSection.setAttribute("value", newImg)
    }
    else if (direction == "right") {
        newImg = currentImg + 1;
        if (newImg > maxImg) {
            newImg = 1;
        }
        newImgName = imgName + newImg;
        document.getElementById(newImgName).scrollIntoView({block: "nearest", inline: "nearest"});
        scrollerSection.setAttribute("value", newImg)
    }
    currentBall(ballName, currentImg, newImg);
}

function ballScroll(scrollerNumber, imageNumber) {
    if (scrollerNumber = "N1") {
        scrollerSection = document.getElementById("scrollerSection1");
        imgName = "img";
        ballName = "ball";
    }
    else if (scrollerNumber = "N2") {
        scrollerSection = document.getElementById("scrollerSection2");
        imgName = "img2_";
        ballName = "ball_2";
    }
    currentImg = Number(scrollerSection.getAttribute("value"));
    // Scroll to img and set current img value
    newImgName = imgName + imageNumber;
    document.getElementById(newImgName).scrollIntoView({block: "nearest", inline: "nearest"});
    scrollerSection.setAttribute("value", imageNumber);
    currentBall(ballName, currentImg, imageNumber);
}

function currentBall(ballName, oldBallNumber, newBallNumber) {
    // Remove class to new ball
    oldBallID = ballName + oldBallNumber;
    oldBall = document.getElementById(oldBallID);
    oldBall.classList.remove("currentBall");

    // Add class to new ball
    newBallID = ballName + newBallNumber;
    newBall = document.getElementById(newBallID);
    newBall.classList.add("currentBall");

}





// Autre fonctions ...