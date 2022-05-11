function OperacionMatematica(operación, numero1, numero2){
    if (operación==="suma") {
        return (numero1+numero2)
    }
    else if (operación==="resta") {
        return (numero1-numero2)
    }
    else if (operación==="multiplicación") {
        return (numero1*numero2)
    }
    else if (operación==="división") {
        return (numero1/numero2)
    }
    else{
        return ("No se ha indicado la operación")
    }
}
const numero1 = 10
const numero2 = 5

console.log ("Resultado de la suma:", OperacionMatematica("suma", numero1, numero2))
console.log ("Resultado de la resta:", OperacionMatematica("resta", numero1, numero2))
console.log ("Resultado de la multiplicación:", OperacionMatematica("multiplicación", numero1, numero2))
console.log ("Resultado de la división:", OperacionMatematica("división", numero1, numero2))
console.log ("Resultado de la operación:", OperacionMatematica(numero1, numero2))