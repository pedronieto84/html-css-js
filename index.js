// Bucle for que se va a ejecutar tantas veces como determine en la constante personas

const personas = 20;

// index += 2 es una abreviacion de
// index = index + 2

for (let index = 0; index <= personas; index += 4) {
  console.log("index", index);
}

// Si no le pongo ningún número interpreta que es un 1.

for (let index = 0; index <= personas; index ++) {
  console.log("index", index);
}

