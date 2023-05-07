let player = {
    body: document.querySelector(".player"),
    positionX: 0,
    positionY: 0,
    correctionY: -16,
    correctionX: 20,
    movement: 1,

    refrescar: function (positionX,positionY) {
        console.log(player.positionX)
        console.log(player.positionY)  
    
        let correctionXX = player.positionX * player.correctionX;
        let correctionYY = player.positionY * - player.correctionY;
        console.log(correctionXX)
        console.log(correctionYY)
        bodyPlayer.style.transform = `translate(${ correctionXX }px , ${ correctionYY}px)`} 


}

let apple = {
    body: document.querySelector(".apple"),
    positionX: 2,
    positionY: 3,
    correctionY: -16,
    correctionX: 20,
    
    refrescar: function (positionX,positionY) {
        console.log(apple.positionX)
        console.log(apple.positionY)  
    
        let correctionXX = apple.positionX * apple.correctionX;
        let correctionYY = apple.positionY * - apple.correctionY;
        console.log(correctionXX)
        console.log(correctionYY)
        bodyApple.style.transform = `translate(${ correctionXX }px , ${ correctionYY}px)`} 

    
    
}

const bodyPlayer = document.querySelector(".player");
const bodyApple = document.querySelector(".apple");
apple.refrescar()
document.onkeydown = checkKey;


var positionY = 0;
var positionX = 0;




/*apple.appleDraw(2,2)*/

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        player.positionY = player.positionY - player.movement  //  up arrow
        player.refrescar()
        checkApple()
        apple.refrescar()
    }
    else if (e.keyCode == '40') {
        player.positionY = player.positionY + player.movement  // down arrow
        player.refrescar()
        checkApple()
        apple.refrescar()

    }
    else if (e.keyCode == '37') {
        player.positionX = player.positionX - player.movement;// left arrow
        player.refrescar()
        checkApple()
        apple.refrescar()

    }
    else if (e.keyCode == '39') {
        player.positionX = player.positionX + player.movement; // right arrow
        player.refrescar()
        checkApple()
        apple.refrescar()

    }

}

function checkBoardLimits() {
    if (player.positionX > 25 || player.positionX < 0 || player.positionY > 0 || player.positionY < -25) {

    } else {
        player.refrescar()
    }

    
}

    function checkApple() {
        if (player.positionX == apple.positionX && player.positionY == apple.positionY) {bodyApple.hidden = true}
    }

/*
function refrescar(positionX,positionY) {
    console.log(player.positionX)
    console.log(player.positionY)  

    let correctionXX = player.positionX * player.correctionX;
    let correctionYY = player.positionY * - player.correctionY + 16;
    console.log(correctionXX)
    console.log(correctionYY)
    bodyPlayer.style.transform = `translate(${ correctionXX }px , ${ correctionYY}px)`; 


*/

/*
    if (applePoscX == playerPoscX) {apple.hidden = true}
    apple.appleDraw(0,0)*/






/*
function refrescar(positionX,positionY) {
    player.style.transform = `translate(${ positionX }px , ${ positionY }px)`;   
    if (applePosc.left == playerPosc.left) {apple.hidden = true}
    console.log(playerPosc)
    console.log(applePosc)

}
*/

/*
function applehit(positionX,positionY) {
    if (applePosc == playerPosc) {apple.hidden = true}
    
}

*/
