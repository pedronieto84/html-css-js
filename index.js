//Definir promesa
//Utilizar setTimeout de 2 segundos
//parametro numero
// numero menor a 18
//rejectara errone fallara de lo contrario se resolvera succes

const nuevaPromesa = (edadNumero) => {
  return new Promise ((resolve,reject) => {
    setTimeout (() => {
      console.log ('Ha pasado el tiempo')
      if (edadNumero <=18) {
        resolve ('Es menor de edad')
      } else {
        reject ('Es mejor de edad')
      }
    }, 5300)

  })

}

nuevaPromesa (14)

.then ((resolve) => {
  console.log (resolve)
  return 
})

.catch ((e) => {
  console.error (e)
})
