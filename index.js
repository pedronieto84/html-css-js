/*

la promesa va a recibir como parametro un numero
si el numero es menor a 18la promesa se reject de lo contrario se resolve
*/


const promise = (number) => {
  return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
      console.log('2 segundos')
      if (number > 18){
        resolve ( 'usuario mayor de edad')
      } else {
        reject ('usuario menor de edad')
      }
    },2000)
  })
}

