import Animal from "./Animal.js"

class Aguila extends Animal {
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido)
    }
    chillar(){
        console.log("Hola!")
    }
}

export default Aguila