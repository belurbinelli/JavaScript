const respuesta = prompt("Ingrese mayor, si desea saber a partir de que edad es mayor o menor, en caso contrario")

for (let i = 1; i <= 100; i++){

    if ( respuesta === "mayor" && i >= 18 ){
        console.log(`Si usted tiene ${i} años, es mayor`)
    }
    else if ( respuesta === "menor" && i < 18){
        console.log(`Si usted tiene ${i} años, es menor`)
    }
    else if ( respuesta === null){
        console.log("No ingresó ninguna instrucción coherente")
        break;
    }  

}
