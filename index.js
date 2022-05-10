function funcEdad(edad){
    if (edad >= 65){
        console.log("es un jubilado")
    }
    else if (edad >=18){
        console.log("está en edad de trabajar")
    }
    else if (isNaN(edad)==false){
        console.log("es menor de edad")
    }
    else{
        console.log("numero inválido")
    }
}
funcEdad("string")