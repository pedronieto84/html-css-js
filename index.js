// Ejercicio 1 Devolver cuantas veces se repite ese caracter en el string


function cuantasVecesAparece(stri, caracter){
  let indices = [];
  for(let i = 0; i < stri.length; i++) {
    if (stri[i].toLowerCase() === caracter) indices.push(i);
  }
	return indices.length;
}

cuantasVecesAparece('Ssaaluuudoss', 'u')

// Ejercicio 2 Recibe un string y un caracter y me devuelve la posicion de ese caracter

const str= 'HolaMundo'
const caracter = 'M'

const posicion = str.indexOf('M')

console.log(posicion)

function lugar (str, caracter){
  return str.indexOf(caracter)
  }

 lugar('HolaMundo', 'M') 
  
// Ejercicio 3 Devolver dos arraigs juntos

arr1 = 'Hola'
arr2= 'Chau'
const dosArr = arr1.concat(arr2)
console.log(dosArr)

function concatenar(arr1, arr2){
  return arr1.concat(arr2)
}

concatenar('Hola','Chau')

