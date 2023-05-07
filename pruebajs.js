
document.onkeydown = checkKey;
var player = document.querySelector(".player");
var apple = document.querySelector(".apple");
var positionY = 0;
var positionX = 0;
var movementPlayer = 20;
var applePosc = document.querySelector(".apple").getBoundingClientRect()
var playerPosc = document.querySelector(".player").getBoundingClientRect()

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        positionY = positionY - movementPlayer  //  up arrow
        refrescar(positionX,positionY)
    }
    else if (e.keyCode == '40') {
        positionY = positionY + movementPlayer  // down arrow
        refrescar(positionX,positionY)

    }
    else if (e.keyCode == '37') {
        positionX = positionX - movementPlayer;// left arrow
        refrescar(positionX,positionY)

    }
    else if (e.keyCode == '39') {
        positionX = positionX + movementPlayer; // right arrow
        refrescar(positionX,positionY)

    }

}



function refrescar(positionX,positionY) {
    player.style.transform = `translate(${ positionX }px , ${ positionY }px)`;   
    if (applePosc.left == playerPosc.left) {apple.hidden = true}

}

function applehit(positionX,positionY) {
    if (applePosc == playerPosc) {apple.hidden = true}
    
}


