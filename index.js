const inputDni = document.getElementById("dni")
const inputContrasenia = document.getElementById("contrasenia")
const formIngreso = document.getElementById("ingreso")
const formulario = document.querySelector("#formulario")
const inputNombre = document.querySelector("#campo-nombre")
const inputApellido = document.querySelector("#campo-apellido")
const inputEdad = document.querySelector("#campo-edad")
const inputContacto = document.querySelector("#campo-contacto")
const submit = document.querySelector("#submit")
const main = document.querySelector("main")
const contenedorLista = document.querySelector(".contenedorLista")
const borrar = document.querySelector("#borrar")

const usuario = {
    dni: "11223344",
    contrasenia: "belen"
}


let invitados = []
const obtenerInvitadosDelLS = localStorage.getItem("invitados")
const invitadosParseado = JSON.parse(obtenerInvitadosDelLS) ?? []
invitados = (invitadosParseado)


function subirInvitadosLS() {
    invitadosJSON = JSON.stringify(invitados)
    localStorage.setItem("invitados", invitadosJSON)
}

function tarjeta(){
    const tarjetasHtml= invitados.reduce ((acc, elemento, i) => {   

        return acc = acc + `    
            <div class="tarjeta"> 
                <p>
                    Nombre: ${elemento.nombre} <br> 
                    Apellido: ${elemento.apellido} <br> 
                    Edad: ${elemento.edad}<br>
                    Contacto: ${elemento.contacto}
                </p> 
            </div>
        `       
    },"")
    contenedorLista.innerHTML = tarjetasHtml
}
tarjeta()

formIngreso.onsubmit = (e) => {
    e.preventDefault()
    if ( inputDni.value === usuario.dni && inputContrasenia.value === usuario.contrasenia ) {
        main.style.display = "flex"
        main.style.flexDirection = "column"
        formIngreso.style.display ="none"
        localStorage.setItem("usuario", true)
    } else {
        formIngreso.reset()
        Toastify({
        text: "El usuario o contraseña es incorrecto",
            duration: 3000
            }).showToast();
    }
}

formulario.onsubmit = (event) => {
    event.preventDefault()
    nombre = inputNombre.value
    apellido = inputApellido.value
    edad = inputEdad.value
    contacto = inputContacto.value
    invitados.push({nombre, apellido, edad, contacto})
    subirInvitadosLS()
    swal({
        title: "¡Invitado confirmado!",
        text: "Los datos se registraron correctamente.",
        icon: "success",
        button: "Salir",
        });

    const tarjetasHtml= tarjeta()

}

borrar.onclick = () => {
    invitados.pop();
    Toastify({
    text: "El registro ha sido borrado",
        duration: 3000
        }).showToast();
    subirInvitadosLS()
    tarjeta()
    
}
