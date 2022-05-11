// Juntar strings, o "string interpolation"

const nombre = "Pedro";
const apellidoPaterno = "Nieto";
const apellidoMaterno = "Sanchez";

// Forma anterior

const nombreCompleto = nombre + " " + apellidoPaterno + " " + apellidoMaterno;
console.log("concatenar strings", nombreCompleto);

// Forma nueva de concatenar stringa
const nombreCompletoFormaNueva = `${nombre} ${apellidoPaterno} ${apellidoMaterno}`;
console.log("concatenar strings forma moderna", nombreCompletoFormaNueva);
