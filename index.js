/*function listaDeInvitados() {
    nombre = prompt ("Ingrese nombre")
    apellido = prompt ("Ingrese apellido")
    edad = prompt ("Ingrese edad")
    console.log(`Invitado Ingresado: ${nombre} ${apellido} ${edad} años`)
    invitados.push ({
    nombre: nombre,
        apellido: apellido,
        edad: edad,
})
}

function repetirAccion () {
    accion = prompt("Para ingresar un invitado nuevo poner CONTINUAR, para salir poner SALIR")
    return accion
}
listaDeInvitados()
accion = repetirAccion()
while(accion != "SALIR" && accion != "salir"){
    listaDeInvitados()
    accion = repetirAccion()
}



const invitadosMayoresDeEdad = invitados.filter((elemento) => {
    return elemento.edad > 18
})


console.log(invitadosMayoresDeEdad)

const invitadosMenoresDeEdad = invitados.filter((elemento) => {
    return elemento.edad < 18
})


console.log(invitadosMenoresDeEdad)

const tarjetasHtml= invitados.reduce ((acc, elemento, i) => {   

    return acc = acc + `    
        <div class="tarjeta"> 
            <p>
                Nombre ${elemento.nombre} <br> 
                Apellido: ${elemento.apellido} <br> 
                Edad: ${elemento.edad}<br>
            </p> 
        </div>
    `       
},"")

console.log(tarjetasHtml)

const contenedorLista = document.querySelector(".contenedorLista")

console.log(contenedorLista)

contenedorLista.innerHTML = tarjetasHtml*/

const formulario = document.querySelector("#formulario")
const inputNombre = document.querySelector("#campo-nombre")
const inputApellido = document.querySelector("#campo-apellido")
const inputEdad = document.querySelector("#campo-edad")
const inputContacto = document.querySelector("#campo-contacto")
const submit = document.querySelector("#submit")

console.log(formulario, inputNombre, inputApellido, inputEdad, inputContacto)

let invitados = []

class Invitados {
    constructor(nombre, apellido, edad, contacto){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.contacto = contacto;
    }
}

formulario.onsubmit = (event) => {
    event.preventDefault()
    console.log(event)
    invitados.push(new Invitados(inputNombre.value, inputApellido.value, inputEdad.value, inputContacto.value))
    console.log(invitados)
}