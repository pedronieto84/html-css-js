// Primer ejercicio

// 1 Crear una función que se llame operacionMatematica. Que va a recibir como parámetros,

// Primer parametro: 'suma', 'resta', 'multiplicacion', 'division' 
// Segundo parametro: numero
// Tercer parametro: numero
const numero1 = 1
const numero2 = 5
const operacion = ""

operacionMatematica (numero1,numero2,operacion)
function operacionMatematica (numero1,numero2,operacion){
    if (operacion === "suma"){
        console.log("resultado", numero1 + numero2)
        return numero1 + numero2;
    }else if (operacion === "resta") {
        console.log("resultado", numero1 - numero2)
        return numero1 - numero2;
    }else if (operacion === "multiplicacion") {
        console.log("resultado", numero1 * numero2)
        return numero1 * numero2;
    }else if (operacion === "division") {
        console.log("resultado", numero1 / numero2)
        return numero1 / numero2;
    }else {
        console.log("operador no valido")
        return;
    }
}









// Me tiene que devolver el resultado de la operación que le he indicado.

// Si le paso un string, que no coincide con ('suma', 'resta', 'multiplicacion', 'division') me deve devolver el texto "Parametro erroneo"


////////////////////////////////////////////////////////////////////////////////////


//// Segundo Ejercicio

// Crear un array con 5 ciudades (string).

const arrayCiudades = ["bcn","Madrid","Sevilla","Paris","Tokyo",]

// Crear una función llamada devolver posicion del array que va a recibir los siguientes parametros


// Primer parametro, el array de las ciudades
// Segundo parametro, el indice

const devolverPosicionArray = arrayCiudades[0]
console.log("Ciudad 1", devolverPosicionArray)

const ciudad2 = arrayCiudades[1]
console.log("Ciudad 2", ciudad2)

const ciudad3 = arrayCiudades[2]
console.log("ciudad 3", ciudad3)


// Me deve devolver el nombre de la ciudad que esta en esa posicion.

////////////////////////////////////////////////////////////////////////////////////////

//// Tercer Ejercicio

// Definis un objeto usuario, que tenga email, password, y nombre. 
// Y creamos una función que recibe como parámetros ese objeto.
// Me tiene que devolver una array de strings con las claves de todas las propiedades.

const myUser = {
    Nombre:"Javi",
    constraseña:"Javo",
    email:"Javu",
}
let llamar = Object.entries(myUser);
console.log(myUser);