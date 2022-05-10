// Ejemplo de un switch / case.

function mayoriaDeEdad( edad ){
    switch (edad) {

        case edad >= 65:
            console.log('jubilado')
            break;

        case edad < 18:
            console.log('menor de edad')
            break;

        default:
            console.log('tengo edad de trabajar')
            break;
    }
}











