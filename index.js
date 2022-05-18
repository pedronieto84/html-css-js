// ASYNC AWAIT Forma moderna de consumir PROMESAS

const promesa = (resultado) => {
    return new Promise ((resolve , reject)=>{
        setTimeout(() => {
            if(resultado){
                resolve({mensaje: 'Conexión exitosa'})
            }else{
                reject({mensaje: 'Conexión Erronea'})
            }
        }, 2000)
       
    })
}

// Consumir una promesa con async await.

(

    async () => {

        try{
            const res = await promesa(false)
            console.log('res', res, res2)
        }catch(e){
            console.log('error', e)
        }
      
    }

)()

