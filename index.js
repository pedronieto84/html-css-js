//// Segundo Ejercicio

// Crear un array con 5 ciudades (string).
// Crear una función llamada devolver posicion del array que va a recibir los siguientes parametros


// Primer parametro, el array de las ciudades
// Segundo parametro, el indice

// Me deve devolver el nombre de la ciudad que esta en esa posicion.

////////////////////////////////////////////////////////////////////////////////////////

const ArrayCiudades = ["Barcelona", "Budapest","Paris", "Praga", "Dublin"]

function devolverPosicionDelArray (Array, indice){
    return Array [indice]
}

console.log (devolverPosicionDelArray (ArrayCiudades, 0))