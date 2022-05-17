// Arrays


const arrayDeObjetos = [
    { nombre: 'Pedro', edad: 38 }, 
    { nombre: 'Luis', edad: 45 }, 
    { nombre: 'Laura', edad: 26 }, 
    { nombre: 'Cristina', edad: 17}
]
console.log(arrayDeObjetos)

// Metodo PUSH sirve para añadir un elemento a un array en la última posición.
const nuevoUsuario = {nombre: 'Abril', edad: 23}
arrayDeObjetos.push(nuevoUsuario);

// Metodo POP es para quitar el ultimo elemento de un array.
arrayDeObjetos.pop()
console.log(arrayDeObjetos)

// Metodo UNSHIFT es como el push pero me lo mete al principio del array
arrayDeObjetos.unshift({nombre: 'Alexander', edad: 19})
console.log(arrayDeObjetos)

// Metodo SHIFT es como el pop pero quita el primer elemento del array
arrayDeObjetos.shift()
console.log(arrayDeObjetos)

// Metodo FOREACH, itera sobre todos los elementos del array.
arrayDeObjetos.forEach((usuario, index) => {
    console.log('usuario', index,  usuario)
})

// Metodo FILTER, filtra un array.
const arrayFiltrado = arrayDeObjetos.filter((usuario, index )=>{
    return usuario.edad > 18
})
console.log(arrayFiltrado)

// Metodo MAP me sirve para mapear un array de objetos
const arrayMapeado = arrayDeObjetos.map((usuario, index)=>{
    return {
        nombre: usuario.nombre,
        edad: usuario.edad,
        nombreEdad: `${usuario.nombre} - ${usuario.edad}` 
    }
})
console.log(arrayMapeado)

// Metodo FIND me sirve para encontrar un elemento en un array

const usuarioLuis = arrayDeObjetos.find((usuario, index)=>{
    return usuario.nombre === 'Luis'
})
console.log('Usuario Luis', usuarioLuis)


// Revisar el findByIndex, some, includes, hasAny... Si quieres saber mas pues en el web3 schools javascript arrays 


