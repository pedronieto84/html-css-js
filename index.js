
function mayorDeEdad(edad) {
    if( edad >= 65 ) console.log("Es un jubilado");
    else if( edad > 18 ) console.log("Es mayor de edad");
    else console.log("Es menor de edad");
};

mayorDeEdad(12);
mayorDeEdad(20);
mayorDeEdad(80);