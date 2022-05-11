// Objetos

const usuario = {
  nombre: "Pedro",
  apellido: "Nieto",
  edad: 38,
  loguearNombre() {
    return `${this.nombre} ${this.apellido}`;
  },
  hijos: {
    nombre: "Carlos",
  },
};
// El this me sirve para acceder a una propiedad de mi mismo objeto.

// El punto me sirve para acceder a las propiedades de un objeto.
console.log("nombre", usuario.nombre);

// Para acceder al apellido
console.log("apellido", usuario.apellido);

// Para acceder a la propiedad de un objeto anidado
console.log("nombre del hijo", usuario.hijos.nombre);

// Llamar a una función que hay dentro de un objeto
const nombre = usuario.loguearNombre();
console.log("nombre mio", nombre);

// 