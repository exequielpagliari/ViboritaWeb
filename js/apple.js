let apple = {
    Element: document.querySelector(".player"),
    positionX: 0,
    positionY: 0,
    correctionY: -52,
    correctionX: 20,
    


    appleDraw:  function (positionX,positionY) {

        this.Element.style.transform = `translate(${ positionX * this.correctionX}px , ${ positionY * this.correctionY}px)`;
    }
    
    
}

