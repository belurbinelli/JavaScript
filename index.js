function edadMayorOMenor ( numero, mayorOMenor ) {

for(let i = 1; i <= numero; i++){

    if ( mayorOMenor === "mayor" && i >= 18 ){
    console.log(i)
}
    else if ( mayorOMenor === "menor" && i < 18){
    console.log(i)
}
}
}

edadMayorOMenor (8, "menor")
edadMayorOMenor (18, "mayor")
