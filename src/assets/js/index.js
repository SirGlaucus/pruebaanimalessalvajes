import Aguila from "./Aguila.js";
import Leon from "./Leon.js"
import Lobo from "./Lobo.js"
import Oso from "./Oso.js"
import Serpiente from "./Serpiente.js"
import animalesPics from "./consulta.js";

(async () => {

    let listaTodosAnimales = []

    const datosAnimales = await animalesPics.getData()
    const previewImagen = document.querySelector('#preview')

    const recargarTabla = (animales) => {
        console.log(animales)
        const animalesImpresos = document.querySelector('#Animales')
        animalesImpresos.innerHTML = ""
        animales.forEach((animal) => {
            animalesImpresos.innerHTML += `
            <div class="px-3 pb-2">
                <div class="card" id="tarjeta">
                    <img width="30" height="200" src="/assets/imgs/${animal.img}" class="card-img-top"/>
                    <div class="card-footer bg-dark" height="1">
                        <object data="/assets/imgs/audio.svg" width="20"> </object>
                    </div>
                </div>
            </div>
            `
        })

        document.querySelectorAll('#tarjeta img').forEach((imagen, index) => {
            const posicion = index
            imagen.addEventListener('click', () => {
                const animalModal = listaTodosAnimales[posicion]
                console.log(animalModal.comentario)
                $('#exampleModal').modal('toggle')
                document.querySelector('.modal-body').innerHTML = `
                <div class="card text-white bg-dark text-center">
                    <img width="30" height="200" src="/assets/imgs/${animalModal.img}" class="card-img-top"/>
                    <div class="mt-2 mb-2"">
                        <h6>${animalModal.edad}</h5>
                        <h6>Comentarios</h5>
                        <hr>
                    </div>
                    <p>${animalModal.comentarios}</p>
                </div>
                `
            })
        })
    }


    /*window.mostrarAnimal = (indice) => {
        const animal = listaTodosAnimales[indice]
        console.log(animal)
        const modal = document.querySelector('#exampleModal')
        modal.style.display = 'toggle'
        

    }*/

    const animalListaNombre = document.querySelector('#animal')
    animalListaNombre.addEventListener('change', async () => {
        const animalNombre = animalListaNombre.value
        const imagenDevuelta = datosAnimales.animales.find(a => a.name === animalNombre).imagen
        console.log(imagenDevuelta)

        previewImagen.innerHTML = `<img width="200" height="200" src="/assets/imgs/${imagenDevuelta}"/>`
    })

    const botonRegistrar = document.querySelector('#btnRegistrar')
    botonRegistrar.addEventListener('click', () => {
        const nombre = document.querySelector(`#animal`).value
        const edad = document.querySelector(`#edad`).value
        const comentario = document.querySelector(`#comentarios`).value
        const animalEncontrado = datosAnimales.animales.find(a => a.name === nombre)
        let nuevoAnimal
        if (nombre === 'Aguila') {
            nuevoAnimal = new Aguila(nombre, edad, animalEncontrado.imagen, comentario, animalEncontrado.sonido)
        } else if (nombre === 'Leon') {
            nuevoAnimal = new Leon(nombre, edad, animalEncontrado.imagen, comentario, animalEncontrado.sonido)
        } else if (nombre === 'Lobo'){
            nuevoAnimal = new Lobo(nombre, edad, animalEncontrado.imagen, comentario, animalEncontrado.sonido)
        } else if (nombre === 'Oso'){
            nuevoAnimal = new Oso(nombre, edad, animalEncontrado.imagen, comentario, animalEncontrado.sonido)
        } else if (nombre === 'Serpiente'){
            nuevoAnimal = new Serpiente(nombre, edad, animalEncontrado.imagen, comentario, animalEncontrado.sonido)
        }

        listaTodosAnimales.push(nuevoAnimal)

        recargarTabla(listaTodosAnimales)
    })
})()

