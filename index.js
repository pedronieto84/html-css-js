// Definir promesa
const promesa = (num) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        
        if (num >=18 ){
                resolve("Es mayor de 18")
        }else{
            reject("error")
        }
        },2000);
    })
}
// consumir promesa
promesa(18)
.then((res)=>{
    console.log(res)
    return
})
.catch((rej)=>{
    console.log(rej)
})
