// Definir una promesa

const Promesa = (edad) => {
  return new Promise(
    (resolve, reject)=> {
      setTimeout (
        ()=>{
          if (edad > 18) {
            resolve ({mensaje: "eres mayor de edad"})
          
          } else {
            reject ("eres menor de edad")
          }
        }
        , 2000)
    } 
  ) 
}

// Consumir una promesa
Promesa (20)
// EL then se ejecuta cuando en la definición de la promesa se llama al resolve()
.then((res)=>{
  console.log("bienvenido", res)
})

.catch((e)=>{
  // Lo que sea erroneo, pasará por aquí
  console.error('no puedes entrar', e)
})
.finally((res)=>{
  // El finally se ejecuta siempre
  console.log('finally')
})
