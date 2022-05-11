// Primer ejercicio

// 1 Crear una función que se llame operacionMatematica. Que va a recibir como parámetros,

// Primer parametro: 'suma', 'resta', 'multiplicacion', 'division' 
// Segundo parametro: numero
// Tercer parametro: numero

// Me tiene que devolver el resultado de la operación que le he indicado.

// Si le paso un string, que no coincide con ('suma', 'resta', 'multiplicacion', 'division') me deve devolver el texto "Parametro erroneo"

function operacionMatematica(operacion, num1, num2){
    if (operacion === "suma"){
        return (num1 + num2);
    }
    else if (operacion === "resta"){
        return (num1 - num2);
    }
    else if ((operacion === "multiplicacion") || ("multiplicación")){
        return (num1 * num2);
    }
    else if (operacion === "division"){
        return (num1 / num2);
    }
    else{
        return("Parámetro erróneo")
    }
}

console.log(operacionMatematica("multiplicación", 4, 2))

////////////////////////////////////////////////////////////////////////////////////


//// Segundo Ejercicio

// Crear un array con 5 ciudades (string).
// Crear una función llamada devolver posicion del array que va a recibir los siguientes parametros


// Primer parametro, el array de las ciudades
// Segundo parametro, el indice

// Me deve devolver el nombre de la ciudad que esta en esa posicion.

const ciudades = ["Madrid","Barcelona","Sevilla","Toledo","Valencia"]

function devolverPosicionArray(ciudades, [index]){
    return ciudades[index]
}
console.log(devolverPosicionArray(ciudades, [2]))

// TODO añadir un return en caso de darse un index inválido

////////////////////////////////////////////////////////////////////////////////////////

//// Tercer Ejercicio

// Definis un objeto usuario, que tenga email, password, y nombre. 
// Y creamos una función que recibe como parámetros ese objeto.
// Me tiene que devolver una array de strings con las claves de todas las propiedades.

const usuario = {
    email: 'adsfsadf',
    password: 'asdfsadf',
    nombre: 'asdfasfsadf'
};

function arrayFunction(usuario) {
    return Object.keys(usuario)
}

console.log(arrayFunction(usuario))

