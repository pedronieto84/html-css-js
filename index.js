// Arrays o Matrices o Arreglos

const arrayCiudades = [ 'Barcelona', 'Madrid', 'Sevilla']

const primeraCiudadDelArray = arrayCiudades[0]
console.log("primera ciudad", primeraCiudadDelArray);

const nombre = ''
// Array anidada dentro de un objeto
const miUsuario = {
    nombre , email, password, arrayDeGenteQueMeGusta: ['1', '56', '234324']
}


// Ejemplo de como acceder a un elemento de un array que está anidado dentro de un objeto.
function elqueMeGustaMasAntiguo(){
    return miUsuario.arrayDeGenteQueMeGusta[0]
}

// Como acceder a array de objetos de un objeto

const usuarioMasComplejo = {
  nombre,
  email,
  password,
  arrayDeGenteQueMeGusta: [
    { nombre, id: "adfsadf" },
    { nombre, id: "adfsadf" },
    { nombre, id: "adfsadf" },
  ],
};

// Acceder a un objeto dentro de un array
const accederAlaIdDelUsuarioMasAntiguo = usuarioMasComplejo.arrayDeGenteQueMeGusta[0].id
console.log(
  "acceder a la id del usuario mas antiguo",
  accederAlaIdDelUsuarioMasAntiguo
);



