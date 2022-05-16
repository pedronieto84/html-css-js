// BOILERPLATE PARA FIREBASE-ADMIN
// Importo la libreria de firebase-admin
let admin = require("firebase-admin");

// Importo las contraseñas y las credenciales
const passwords = require("./../cert.json");

// Inicializo el admin y para eso tengo que pasarle un objeto con las credenciales.
admin.initializeApp({ credential: admin.credential.cert(passwords) });

// Meto en la constante db todo lo relativo a la base de datos
const db = admin.firestore();

// BOILERPLATE PARA EXPRESS
// Importo express
const express = require("express");
// Instancio express
const app = express();
// Me lo cargas en el puerto 3000
const port = 3000;

// Todo lo que me estés cargando
app.use(express.json());

// Ejemplo de una ruta GET, que me sirve para cargar los datos.
app.get("/usuarios-mayores-edad", (req, res) => {
  db.collection("users")
    .get() // Coge todo lo que hay en la base de datos de Users
    .then(
      // Aqui te devuelvo todo lo que me has pedido
      (querySnapshot) => {
        // Haz lo que quieras con toda la data que te he devuelto;
        // Defino un array vacio donde voy a meter todos los objetos de Usuarios
        const usuarios = [];
        querySnapshot.forEach((doc) => {
          // En cada iteración le introduzco el objeto con los datos al array usuarios
          usuarios.push(doc.data());
        });
        const filtradaData = usuarios.filter(( user )=> {
          const edadDeseada = 18
          const edadDeEsteUsuario = user.edad
          return ( edadDeEsteUsuario >= edadDeseada )
        })
        // El objeto res (o reponse ) se encarga de todo lo relativo al a respuesta
        res.send(filtradaData);
      }
    );
});


const randomNumber = () => {
  return Math.round(Math.random() * 4);
};

const randomAge = () => {
  return Math.round(Math.random() * 55);
};
// El metodo .listen() sirve para inicializar el servidor.
app.listen(port, () => {
  console.log("puerto funcionando");
  const nameArray = ["Pedro", "Glendi", "Marcos", "Adri", "Alexander"];
  const surnamesArray = ["Sanchez", "Rodriguez", "Perez", "Martin", "Ochoa"];
  const howManyUsers = Array.from(Array(40).keys());
  for (let i in howManyUsers) {
    console.log("randomNumber", randomNumber());
    const name = `${nameArray[randomNumber()]} ${
      surnamesArray[randomNumber()]
    }`;
    const user = {
      name,
      edad: randomAge()
    };
    db.collection("users").doc(i).set(user);
  }
});
