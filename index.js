// Javascript OBJECT o PLAIN JAVASCRIPT OBJECT

const usuario = {
    name: 'Pedro',
    edad: 38
}


// SI quiero añadirle la propiedad ciudad: "Terrassa"
usuario.ciudad = "Terrassa"

// Modificar el valor de una propiedad de un objeto.
usuario.ciudad = "Barcelona"

// Si quiero crear un objeto anidado esta es la forma.
usuario.pais = {
    comunidad: {
        ciudad: "Terrassa"
    }
}

// Si intento anidar un objeto de esta forma.
usuario.pais.comunidad.ciudad = 'Terrassa' // Me va a dar error









