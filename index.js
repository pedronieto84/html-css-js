// Definir promesa
const promesa = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("2 sec")
            resolve(true)
        },2000);
    })
}
// consumir promesa
promesa().then((res)=>{
    console.log("respuesta")
})
