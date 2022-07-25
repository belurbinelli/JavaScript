const invitados = [
    {
        nombre: "Belen",
        apellido: "Urbinelli",
        edad: 25
    },
    {
        nombre: "Candela",
        apellido: "Urbinelli",
        edad: 7
    },
    {
        nombre: "Veronica",
        apellido: "Poncia",
        edad: 45
    },
    {
        nombre: "Julieta",
        apellido: "Urbinelli",
        edad: 12
    },
    {
        nombre: "Julio",
        apellido: "Urbinelli",
        edad: 44
    },
]

function listaDeInvitados() {
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


console.log(invitados);

const invitadosMayoresDeEdad = invitados.filter((elemento) => {
    return elemento.edad > 18
})


console.log(invitadosMayoresDeEdad)

const invitadosMenoresDeEdad = invitados.filter((elemento) => {
    return elemento.edad < 18
})


console.log(invitadosMenoresDeEdad)
