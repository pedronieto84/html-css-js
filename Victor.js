const promesa = (num) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if(num >= 18){
              resolve("Mayor de edad")
          }else{
              reject()
          }
          
      }, 3000)
  })
}
promesa(35)
.then((res)=>{
  console.log(res)
})
.catch((e)=>{
  console.log("Menor de Edad")
})