/// Primer ejercicio

// 1 Crear una función que se llame operacionMatematica. Que va a recibir como parámetros,

// Primer parametro: 'suma', 'resta', 'multiplicacion', 'division'
// Segundo parametro: numero
// Tercer parametro: numero

// Me tiene que devolver el resultado de la operación que le he indicado.

// Si le paso un string, que no coincide con ('suma', 'resta', 'multiplicacion', 'division') me deve devolver el texto "Parametro erroneo"

function operacionMatematica(operacion, num1, num2) {
  if (operacion === "suma") {
    return (num1 + num2);
  } else {
    if (operacion === "resta") {
        return (num1 - num2)
    } 
    else {
      if (operacion === "multiplicacion") {
       return (num1*num2)
      } 
    else {
        if (operacion === "division") {
          return (num1 / num2)
        }
      }
    }
  }
}
console.log(operacionMatematica("division", 5, 4));
