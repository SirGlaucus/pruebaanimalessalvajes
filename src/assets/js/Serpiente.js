import Animal from "./Animal.js"

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido)
    }
    sisear(){
        console.log("Hola!")
    }
}

export default Serpiente