var miString = "Barcelona"
var miCaracter = "a"

//función que te diga cuantas veces se repite un caracter


//funcion de la posición 0 index based donde se encuentra la primera aparición de la letra

function encontrarPosicionCaracter (a, b) {
  var posicionDeString = a.indexOf (b);
  console.log(posicionDeString);
}
encontrarPosicionCaracter (miString, miCaracter);

//funcion que defina dos parametros 2 arrays y los devuelve juntos

const miArray1 = ["Juan", "Pedro"]

const miArray2 = ["Jose"]

function devolverArraysJuntos(ejemplo1,ejemplo2){
  const miArray3 = ejemplo1.concat(ejemplo2);
  console.log (miArray3);
}

devolverArraysJuntos (miArray1,miArray2);