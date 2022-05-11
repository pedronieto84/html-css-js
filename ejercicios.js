// Primer ejercicio

// 1 Crear una función que se llame operacionMatematica. Que va a recibir como parámetros,

// Primer parametro: 'suma', 'resta', 'multiplicacion', 'division' 
// Segundo parametro: numero
// Tercer parametro: numero

// Me tiene que devolver el resultado de la operación que le he indicado.

// Si le paso un string, que no coincide con ('suma', 'resta', 'multiplicacion', 'division') me deve devolver el texto "Parametro erroneo"


const numero1 =56
const numero2 =85
let operacion = suma

operacionMatematica()

function operacionMatematica (numero1,numero2,operacion){
if (operacion == "suma"){
    const resultado= numero1 + numero2
    return resultado
}else if (operacion == "resta"){
    const resultado= numero1 - numero2
return resultado
} else if (operacion == "multiplicacio"){
    const resultado= numero1 * numero2
    return resultado
} else if (operacion == "divisio") {
    const resultado= numero1 / numero2
    return resultado
}else{
    resultado= "parametro error"
    return resultado
}
}

console.log(resultado)
//// Segundo Ejercicio

// Crear un array con 5 ciudades (string).
// Crear una función llamada devolver posicion del array que va a recibir los siguientes parametros


// Primer parametro, el array de las ciudades
// Segundo parametro, el indice

// Me deve devolver el nombre de la ciudad que esta en esa posicion.
 const array =[`madrid`,`barcelona`,`berlin`,`nueva york`,`valencia`]
const indice =0
posicionarray()
 function posicionarray (array,indice){
     while (indice > array.length) {
         if(indice === array.length[0]){
            const ciudad = array[indice];
            return ciudad
         }
         indice++
     }
 }


 console.log(ciudad)


//// Tercer Ejercicio

// Definis un objeto usuario, que tenga email, password, y nombre. 
// Y creamos una función que recibe como parámetros ese objeto.
// Me tiene que devolver una array de strings con las claves de todas las propiedades.



 const usuario = {
     email:marcgmail.com,
     password:mjygv,
     nombre:marc
 }

ejercicio3()
 function ejercicio3 (usuario){
    for (let index = 0; index > usuario.length; index++) {
    
    }
}