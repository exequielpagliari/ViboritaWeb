let player = {
    body: document.querySelector(".player"),
    positionX: 0,
    positionY: 0,
    correctionY: -16,
    correctionX: 20,
    movement: 1,

    refrescar: function (positionX,positionY) {

    
        let correctionXX = player.positionX * player.correctionX;
        let correctionYY = player.positionY * - player.correctionY;

        bodyPlayer.style.transform = `translate(${ correctionXX }px , ${ correctionYY}px)`} 


}

let apple = {
    body: document.querySelector(".apple"),
    positionX: 2,
    positionY: 2,
    correctionY: -16,
    correctionX: 20,
    
     checkApple:function() {
        if (player.positionX == this.positionX && player.positionY == this.positionY) {this.positionX = randomNumber(); this.positionY = randomNumber()}
        apple.refrescar()
    },



    refrescar: function (positionX,positionY) {

    
        let correctionXX = apple.positionX * apple.correctionX;
        let correctionYY = apple.positionY * - apple.correctionY;

        bodyApple.style.transform = `translate(${ correctionXX }px , ${ correctionYY}px)`} 

    
    
}

const bodyPlayer = document.querySelector(".player");
const bodyApple = document.querySelector(".apple");
apple.refrescar()
document.onkeydown = checkKey;
var prevButton = document.getElementById("slide-arrow-prev");

var nextButton = document.getElementById("slide-arrow-next");

var positionY = 0;
var positionX = 0;




function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        player.positionY = player.positionY - player.movement  //  up arrow
        player.refrescar()
        apple.checkApple()

    }
    else if (e.keyCode == '40') {
        player.positionY = player.positionY + player.movement  // down arrow
        player.refrescar()
        apple.checkApple()


    }
    else if (e.keyCode == '37') {
        player.positionX = player.positionX - player.movement;// left arrow
        player.refrescar()
        apple.checkApple()


    }
    else if (e.keyCode == '39') {
        player.positionX = player.positionX + player.movement; // right arrow
        player.refrescar()
        apple.checkApple()


    }

}


nextButton.addEventListener("click", () => {

  player.positionX = player.positionX - player.movement;// left arrow
        player.refrescar()
        apple.checkApple()

});

prevButton.addEventListener("click", () => {

  player.positionX = player.positionX + player.movement; // right arrow
        player.refrescar()
        apple.checkApple()
});



function checkBoardLimits() {
    if (player.positionX > 25 || player.positionX < 0 || player.positionY > 0 || player.positionY < -25) {

    } else {
        player.refrescar()
    }

    
}



function randomNumber() {
    number = Math.floor(Math.random() * 100);
    while (number > 24) {
        number = Math.floor(Math.random() * 100);
    }
    return number
    

}
