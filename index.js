
const obtenerCantidad = function(string, char) {
  if( typeof string !== "string" ) return null;
  if( typeof char !== "string" ) return null;
  if( char.length !== 1 ) return null;

  return string.split(char).length-1;
};

const obtenerPosicion = function(string, char) {
  if( typeof string !== "string" ) return null;
  if( typeof char !== "string" ) return null;
  if( char.length !== 1 ) return null;

  return string.indexOf(char);
};

const unirArrays = function(firstArray, secondArray) {
  if( ! Array.isArray(firstArray) ) return null;
  if( ! Array.isArray(secondArray) ) return null;

  return firstArray.concat(secondArray);
};

console.log("Número de veces que se repite", obtenerCantidad("hola mundo qué tal la vida", "a"));
console.log("Posición de la primera", obtenerPosicion("hola mundo", "a"));
console.log("Unir arrays", unirArrays([1,2,3,4,5], [6,7,8,9,10]));