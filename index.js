let resultado = 32
const promesa = (resultado) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2 segundos')
            if(resultado >= 18){
                resolve("succes suprimo")
            }else{
                reject('erroneo')
            }
            
        }, 2000)
    })
}
promesa(resultado);

/*
// Definir una promesa

const promesa = (resultado) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('3 segundos')
            if(resultado){
                resolve( {usuario: 'Luis'} )
            }else{
                reject('ha habido un error')
            }
            
        }, 3000)
    })
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
    */