let player = {
    this: document.querySelector(".player"),
    positionX: 0,
    positionY: 0,
    correctionY: -16,

    nombreCompleto: function () { return this.nombre + " " + this.apellido } //metodo usar this. para el propio objeto
}