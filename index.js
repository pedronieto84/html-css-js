// Particularidades de LET

let nombre = "Pedro";

function loguearNombre() {
  // Aquí defino un let que tiene el mismo nombre, pero no me da error porque solo vive en este scope local.

  let nombre = "Luis";
  console.log("nombre en el scope local", nombre);
}

loguearNombre();

console.log("nombre en el scope global", nombre);
