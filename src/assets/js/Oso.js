import Animal from "./Animal.js"

class Oso extends Animal {
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido)
    }
    gruñir(){
        console.log("Hola!")
    }
}

export default Oso