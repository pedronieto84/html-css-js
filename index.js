const array1 =  ["a","b","c"]
const array2 = ["d","e","f"]


function contarLetras(str, char) {
  var repeticiones = 0;
  for (var posicion = 0; posicion < str.length; posicion++) 
  {
    if(str.charAt(posicion) == char) 
      repeticiones += 1;
    }
  return repeticiones;
}

function posicionCaracter(string1, char) {
  return (string1.indexOf(char))
}

function juntarArray(array1, array2) {
  return (array1.concat(array2))
}

juntarArray(array1, array2)
posicionCaracter("string","s")
contarLetras("abcabcabc","a")



