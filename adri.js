const operador = "+"
const numero1 = 2
const numero2 = 3
let resultado

operacionMatematica(operador, numero1, numero2, resultado)
function operacionMatematica (operador, numero1, numero2, resultado){
    if (operador === "suma") {
        resultado = numero1 + numero2
        console.log(resultado)
        return resultado;
    }else if (operador === "resta") {
        resultado = numero1 - numero2
        console.log(resultado)
        return resultado;
    }else if (operador === "multiplicacion") {
        resultado = numero1 * numero2
        console.log(resultado)
        return resultado;
    }else if (operador === "dividision") {
        resultado = numero1 / numero2
        console.log(resultado)
        return resultado;
    }else {
        return "ponme un operador valido tonto";
    }

}