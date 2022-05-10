function edadCompleta (edad){
    if (edad<=18){
        console.log("es menor de edad")
    } else if( edad>=65) {
        console.log("esta jubilado")
    } else {
        console.log("Edad para trabajar")
    }
}

edadCompleta(50)
edadCompleta(70)
edadCompleta(16)