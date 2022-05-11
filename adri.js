/// Segundo Ejercicio

// Crear un array con 5 ciudades (string).
// Crear una función llamada devolver posicion del array que va a recibir los siguientes parametros


// Primer parametro, el array de las ciudades
// Segundo parametro, el indice

// Me deve devolver el nombre de la ciudad que esta en esa posicion.
const arrayCiudades = ["San Francisco", "Memphis", "Milwakee", "Boston"]
let indice = 0
devolverPosicion (arrayCiudades, indice)
function devolverPosicion (arrayCiudades, indice){
    while (indice<4) {
        console.log(arrayCiudades[indice])
        indice++
        
    }
}