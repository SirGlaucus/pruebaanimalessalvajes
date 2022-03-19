import Animal from "./Animal.js"

class Leon extends Animal {
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido)
    }
    rugir(){
        console.log("Hola!")
    }
}

export default Leon