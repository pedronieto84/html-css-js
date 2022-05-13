
// En la primera linea cargo toda la libreria de Express
const express = require("express");

// Creas una instancia de la clase Express
const app = express();

// Cargo la base de datos 
const Datastore = require('nedb')

// Inicializo la base de datos y le defino la ruta donde voy a guardar los datos
const db = new Datastore({ filename: __dirname + '/data/example.dat', autoload: true});

// Me lo cargas en el puerto 3000
const port = 3000;

// Todo lo que me estés cargando
app.use( express.json() )

// Definicion de una ruta de tipo POST. (Me sirve para crear un registro en la base de datos)
app.post('/alta-usuario', ( req, res ) => {
  console.log('usuario', req.body)

  // Cojo el dato que me han enviado
  const documentoAInsertar = req.body

  // Lo inserto en la base de datos
  db.insert(documentoAInsertar, function (err, newDoc) {   
    console.log('exito', newDoc)
  });
  res.send(req.body)
})

// Ejemplo de una ruta GET, que me sirve para cargar los datos.
app.get('/alta-usuario', (req,res)=>{

  // Cargo el dato de la base de datos
  db.find({}, function (err, docs) {
    // Una vez lo he cargado, lo logueo
    console.log('all data', docs)

    // Acto seguido, lo devuelvo al cliente (quien me ha hecho la petición.)
    res.send(docs)
  });
})

// El metodo .listen() sirve para inicializar el servidor.
app.listen(port, () => {
});
