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
const formRegistro = document.getElementById("registro")
const formPass = document.getElementById("recuperarPass")
const controlIngreso = document.getElementById("controlDeIngreso")
const register = document.getElementById("register")
const recuperarContrasenia = document.getElementById("recuperarContrasenia")
const nuevoNombre = document.getElementById("nuevoNombre")
const nuevoDni = document.getElementById("nuevoDni")
const nuevaContrasenia = document.getElementById("nuevaContrasenia")
const registrarse = document.getElementById("registrarse")
const dniRecuperar= document.getElementById("dniRecuperar")
const nuevaPass= document.getElementById("nuevaPass")
const confirmarPass= document.getElementById("confirmarPass")
const cambiarPass = document.getElementById("cambiarPass")


let usuarios = []


function subirUsuariosLocStr(){
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}

function bajarUsuariosLocStr(){
    usuarios= JSON.parse(localStorage.getItem("usuarios")) || []
}

bajarUsuariosLocStr()

class usuarioNuevo {
    constructor(nombre, contrasenia, dni) {
        this.nombre = nombre,
        this.contrasenia = contrasenia,
        this.dni = dni
    }
}

function registreishon() {
    const newUser = new usuarioNuevo(nuevoNombre.value, nuevaContrasenia.value, nuevoDni.value)
    usuarios.push(newUser)
}

registrarse.onclick = (e) => {
    e.preventDefault()
        let dniExiste = usuarios.some((usuarioN) => usuarioN.dni === nuevoDni.value)
        let nombreExiste = usuarios.some((usuarioN) => usuarioN.nombre === nuevoNombre.value)

        function nuevoUsuario() {
            registreishon()
            subirUsuariosLocStr()
        }
        (dniExiste || nombreExiste) ? alert("Cuenta existente!") : nuevoUsuario()

}        

function cambiarContrasenia(){
    let dniGuardado = usuarios.find(usuarioN => usuarioN.dni === dniRecuperar.value)

    if (dniGuardado !== undefined) {
        if (nuevaPass.value === confirmarPass.value) {
            dniGuardado.contrasenia = nuevaPass.value
            Toastify({
                text: "La contraseña fue modificada",
                    duration: 3000
                    }).showToast();
        subirUsuariosLocStr()
        }
        else {
            Toastify({
                text: "Datos no vaidos",
                    duration: 3000
                    }).showToast();
        }
    }
}

cambiarPass.onclick = (e) => {
    e.preventDefault()
    cambiarContrasenia()
}


let invitados




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

if (invitados != undefined){
    tarjeta()
}

function cargarLista() {

    fetch("http://127.0.0.1:5500/data.json")
    .then(res => res.json())
    .then(data => { invitados = data 
    subirInvitadosLS()
    tarjeta()
            } ) 
}

function iniciarLista() {
const invitadosParseado = JSON.parse(localStorage.getItem("invitados")) ?? cargarLista()
invitados = (invitadosParseado)
}

iniciarLista()



function logIn() {
    let usuarioIngresado = usuarios.find(usuarioN => usuarioN.dni === inputDni.value)

    if (usuarioIngresado == undefined) {
        formIngreso.reset()
        Toastify({
        text: "El usuario es incorrecto",
            duration: 3000
            }).showToast();
        
    } else if (usuarioIngresado.contrasenia !== inputContrasenia.value) {
        formIngreso.reset()
        Toastify({
        text: "La contraseña es incorrecta",
            duration: 3000
            }).showToast();

    } else {
        main.style.display = "flex"
        main.style.flexDirection = "column"
        controlIngreso.style.display = "none"
    }
}


formIngreso.onsubmit = (e) => {
    e.preventDefault()
    logIn()
}

register.onclick = (e) => {
    e.preventDefault()
    formRegistro.style.display="flex"
    formPass.style.display="none"

}

recuperarContrasenia.onclick = (e) => {
    e.preventDefault()
    formPass.style.display="flex"
    formRegistro.style.display="none"

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

    const tarjetasHtml = tarjeta()

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
