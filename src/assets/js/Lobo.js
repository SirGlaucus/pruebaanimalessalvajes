import Animal from "./Animal.js"

class Lobo extends Animal {
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido)
    }
    aullar(){
        console.log("Hola!")
    }
}

export default Lobo