function listaDeInvitados() {
    nombre = prompt ("Ingrese nombre")
    apellido = prompt ("Ingrese apellido")
    edad = prompt ("Ingrese edad")
    console.log(`Invitado Ingresado: ${nombre} ${apellido} ${edad} años`)
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


invitados.push ({
        nombre: "Pablo",
        apellido: "Altera",
        edad: 33,
})

console.log(invitados);
