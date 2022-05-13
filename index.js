let hola = "ok";

function test() {
  let hola = "test";

  console.log(hola);
  console.log(globalThis.hola);
}

test();