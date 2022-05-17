const promesa=(num)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if (num<18){
        reject ('entrada denegada')
      } else{
        resolve ('entrada permitida')
      }
    }, 2000
      )
    })
  
  }

promesa(17).then((res)=>{
  console.log(res)
})
.catch((reject)=>{
  console.log(reject)
})
