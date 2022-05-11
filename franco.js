// ejercicio 1 


function operacionMatematica(operacion, numero1, numero2){
    if (operacion === "suma"){
        return (numero1 + numero2);
    }
    else if (operacion === "resta"){
        return (numero1 - numero2);
    }
    else if ((operacion === "multiplicacion")){
        return (numero1 * numero2);
    }
    else if (operacion === "division"){
        return (numero1 / numero2);
    }
    else{
        return("No existe la operacion")
    }
}

operacionMatematica('suma', 4, 8)
operacionMatematica('resta', 4, 8)
operacionMatematica('multiplicacion', 4, 8)
operacionMatematica('division', 4, 8)
operacionMatematica('hola', 4, 8)

//ejercicio 2

const ciudades = ["Madrid","Barcelona","Buenos Aires","Mar del Plata","Rosario"]

function devolverPosicionArray(ciudades, indice){
    return ciudades[indice]
}
devolverPosicionArray(ciudades, 3)

//ejercicio 3

const usuario = {
    nombre: 'Franco',
    contraseña: 'Hola1234',
    email:'juancito123@gmail.com'
}
function clavesDeUsuarios (nombreUsuario){
    return Object.keys(nombreUsuario)
}