
function verificarEdad(edad) {
  return new Promise((res, err) => {
    setTimeout(function() {
      if( edad >= 18 ) res(true);
      else err(false);
    }, 2000);
  });
};

verificarEdad(19).then(() => {
  console.log("Es mayor de edad");
}).catch(() => {
  console.log("No es un mayor de edad");
});