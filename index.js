/* 1 contar letras recibe string y caracter. cuantas veces se repte ese caacter en el string

2 recibe string y caracter y me devuelve la pocicion 0 index based donde se encuentra la primerra aparicion de la letra

3 recibe 2 arrays y me los devuelve juntos 
*/

function cuantasVecesAparece(palabra, caracter){
    let veces = [];
    for(var i = 0; i < palabra.length; i++) {
      if (palabra[i].toLowerCase() === caracter) veces.push(i);
    }
      return veces.length ;
}

// const valor =  cuantasVecesAparece('Barcelona', 'a')
// console.log(valor)


function dondeCaracter (string, caracter){
    return string.search(caracter)
}


function juntarArrays (array1, array2){
    return array1.concat(array2)
}
