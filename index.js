// Primer ejercicio

// 1 Crear una función que se llame operacionMatematica. Que va a recibir como parámetros,

// Primer parametro: 'suma', 'resta', 'multiplicacion', 'division' 
// Segundo parametro: numero
// Tercer parametro: numero

// Me tiene que devolver el resultado de la operación que le he indicado.

// Si le paso un string, que no coincide con ('suma', 'resta', 'multiplicacion', 'division') me deve devolver el texto "Parametro erroneo"

function operacionMatematica (operacion, numero1, numero2){
    if ('suma')
    {return(numero1 + numero2)}
    else if ('resta')
    {return(numero1 - numero2)
    }
    else if ('multiplicacion') {
        return(numero1 * numero2)
    }
    else ('division')
    {return(numero1 / numero2)}
}

console.log(operacionMatematica('suma', 2,6))  

////////////////////////////////////////////////////////////////////////////////////


//// Segundo Ejercicio

// Crear un array con 5 ciudades (string).
// Crear una función llamada devolver posicion del array que va a recibir los siguientes parametros


// Primer parametro, el array de las ciudades
// Segundo parametro, el indice

// Me deve devolver el nombre de la ciudad que esta en esa posicion.

const arrayCiudades = ['Buenos Aires', 'Paris', 'Londres']

const segundaCiudadDelArray = arrayCiudades [1]
console.log('segunda ciudad', segundaCiudadDelArray)

function devolverPosicionDelArray () {
    return arrayCiudades [1]
console.log('tercera ciudad', devolverPosicionDelArray)}



////////////////////////////////////////////////////////////////////////////////////////

//// Tercer Ejercicio

// Definis un objeto usuario, que tenga email, password, y nombre. 
// Y creamos una función que recibe como parámetros ese objeto.
// Me tiene que devolver una array de strings con las claves de todas las propiedades.

