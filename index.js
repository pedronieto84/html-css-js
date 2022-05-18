// Objetos con propiedades dinamicas.

// Esto es un objeto estatico
const usuario = { nombre: 'Pedro', edad: 39 } 

// Acceder de forma dinamica a una propiedad
const propiedad = 'ciudad'
usuario[propiedad] = "Terrassa" // usuario.ciudad = "Terrassa"

console.log(usuario)


// Ejemplo de uso de propiedades dinamicas
const arrayDeString = ["hola", "hola", "hola", "hola", "hola", "adios", "gatos"]
// Inicializo un objeto vacio

const iteraciones = {}

arrayDeString.forEach((palabra)=>{
    if(iteraciones[palabra] === undefined){
        // Inicializo el objeto anidado de la palabra en cuestión, que ahora es hola
        iteraciones[palabra] = {
            texto: palabra,
            repeticiones: 1
        }
    }else{
        iteraciones[palabra].repeticiones += 1
    }
})
console.log('Iteraciones',iteraciones )



