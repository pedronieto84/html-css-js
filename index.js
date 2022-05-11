
//
// EJERCICIO 1:
// Función de operaciones matemáticas.
//
function operacionMatematica(operacion, numero1, numero2) {
    switch (operacion) {
        case "suma":
            return numero1+numero2;
        case "resta":
            return numero1-numero2;
        case "multiplicación":
            return numero1*numero2;
        case "división":
            return numero1/numero2;
        default:
            return;
    }
}

// Ejemplo de uso:
console.log("suma", operacionMatematica("suma", 15, 20));
console.log("resta", operacionMatematica("resta", 10, 5));
console.log("multiplicación", operacionMatematica("multiplicación", 20, 2));
console.log("división", operacionMatematica("división", 4, 2));

//
// EJERCICIO 2:
// Función para devolver una ciudad.
//
const ciudades = ["Barcelona","Madrid","Málaga","Valencia","La Coruña"];
function devolverPosicionArray(array, posicion) {
    return array[posicion];
}