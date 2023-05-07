
document.onkeydown = checkKey;
var player = document.querySelector(".player");
var apple = document.querySelector(".apple");
var positionY = 0;
var positionX = 0;
var movementPlayer = 1;
var applePoscX = 2
var applePoscY = 2
var playerPoscX = 1
var playerPoscY = 1

const aY = -52
const pY = -16

appleDraw(applePoscX,applePoscY)

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


function appleDraw(positionX,positionY) {
    apple.style.transform = `translate(${ positionX * 20 }px , ${ positionY * - aY + aY}px)`;
}

function refrescar(positionX,positionY) {
    player.style.transform = `translate(${ positionX * 20 }px , ${ positionY * - pY}px)`; 
    console.log(positionX)
    console.log(positionY)  
    if (applePoscX == playerPoscX) {apple.hidden = true}



}


/*
function refrescar(positionX,positionY) {
    player.style.transform = `translate(${ positionX }px , ${ positionY }px)`;   
    if (applePosc.left == playerPosc.left) {apple.hidden = true}
    console.log(playerPosc)
    console.log(applePosc)

}
*/


function applehit(positionX,positionY) {
    if (applePosc == playerPosc) {apple.hidden = true}
    
}


