function mayorEdad (edad){
    if (edad >= 18 && edad < 65){
        console.log('estas en edad de trabajar')
    }
    else if(edad >= 65){
        console.log('eres un jubilado')
    }
    else{
        console.log('eres menor')
    }
}

mayorEdad(17)
mayorEdad(30)
mayorEdad(80)