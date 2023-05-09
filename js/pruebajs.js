let player = {
    body: document.querySelector(".player"),
    positionX: 0,
    positionY: 0,
    correctionY: -16,
    correctionX: 20,
    movement: 1,

    refrescar: function (positionX, positionY) {


        let correctionXX = player.positionX * player.correctionX;
        let correctionYY = player.positionY * - player.correctionY;

        bodyPlayer.style.transform = `translate(${correctionXX}px , ${correctionYY}px)`
    }


}

let apple = {
    body: document.querySelector(".apple"),
    positionX: 2,
    positionY: 2,
    correctionY: -16,
    correctionX: 20,

    checkApple: function () {
        if (player.positionX == this.positionX && player.positionY == this.positionY) { this.positionX = randomNumber(); this.positionY = randomNumber() }
        apple.refrescar()
    },



    refrescar: function (positionX, positionY) {


        let correctionXX = apple.positionX * apple.correctionX;
        let correctionYY = apple.positionY * - apple.correctionY;

        bodyApple.style.transform = `translate(${correctionXX}px , ${correctionYY}px)`
    }



}

const bodyPlayer = document.querySelector(".player");
const bodyApple = document.querySelector(".apple");
apple.refrescar()
document.onkeydown = checkKey;
var prevButton = document.getElementById("slide-arrow-prev");

var nextButton = document.getElementById("slide-arrow-next");


var upButton = document.getElementById("slide-arrow-up");

var downButton = document.getElementById("slide-arrow-down");

var positionY = 0;
var positionX = 0;
var tiem = 0;
var direction = 0
var interval = 1000
setInterval(tiempo, interval);


function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        direction = 2


    }
    else if (e.keyCode == '40') {
        direction = 3



    }
    else if (e.keyCode == '37') {
        direction = 2



    }
    else if (e.keyCode == '39') {
        direction = 0



    }

}


nextButton.addEventListener("click", () => {


    direction = 0

});

prevButton.addEventListener("click", () => {

    direction = 1

});

upButton.addEventListener("click", () => {

    direction = 2

});


downButton.addEventListener("click", () => {


    direction = 3
});



function tiempo() {
    switch (direction) {
        case 0:
            player.positionX = player.positionX + player.movement;// left arrow
            break;
        case 1:
            player.positionX = player.positionX - player.movement; // right arrow
            break;
        case 2:
            player.positionY = player.positionY - player.movement  //  up arrow
            break;
        case 3:
            player.positionY = player.positionY + player.movement  // down arrow
            break;
    }
    checkBoardLimits()
    player.refrescar()
    apple.checkApple()
    
}

/*
function checkBoardLimits() {
    if (!(player.positionX > 14 || player.positionX < 0 || player.positionY > 0 || player.positionY < -14)) {
        interval = 0
    } 


}

*/

function randomNumber() {
    number = Math.floor(Math.random() * 100);
    while (number > 15) {
        number = Math.floor(Math.random() * 100);
    }
    return number


}
