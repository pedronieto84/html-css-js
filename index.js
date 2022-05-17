const promise = (number) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if(number >= 18){
              resolve("Usuario mayor de 18")
          }else{
              reject("Error")
          }
          
      }, 2000)
  })
}

promise(17)
.then((res)=>{
  console.log(res)
  return
})
.catch((rej)=>{
  console.error(rej)
})




