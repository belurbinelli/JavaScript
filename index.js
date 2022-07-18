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

