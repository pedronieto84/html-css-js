// Definir una promesa

const Promesa = (edad) => {
  return new Promise(
    (resolve, reject)=> {
      setTimeout (
        ()=>{
          if (edad > 18) {
            
          }
        }
        
        , 2000)

    } 
  ) 

  
}

// Consumir una promesa
promesa(false)
// EL then se ejecuta cuando en la definición de la promesa se llama al resolve()
.then((res)=>{
  console.log('respuesta de la promesa', res)
  return 'hola'
})
.then((res)=>{
  // Puedo concatenar varios then, y el return de un then, lo consume el otro recibiendolo como parametro
  console.log('recibo del then anterior', res)
})
.catch((e)=>{
  // Lo que sea erroneo, pasará por aquí
  console.error('error que me devuelve la promesa', e)
})
.finally((res)=>{
  // El finally se ejecuta siempre
  console.log('finally')
})
