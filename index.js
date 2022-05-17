
const parametro = 52

const promesa = (parametro) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log('2 segundos')
          if(parametro >= 18){
              resolve("es mayor de edad")
          }else{
              reject("es menor de edad")
          }
          
      }, 2000)
  })
}


promesa(parametro)
.then((res)=>{
  console.log('mayor de edad', res)
  return 'hola'
})
.catch((e)=>{
  console.error('menor de edad', e)
})
.finally((res)=>{
  console.log('finally')
})