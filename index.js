/* definir una promesa 
la promesa va a usar un set timeout de 2s
la promesa va a recibir como parametro un numero
si el numero es menor a 18la promesa se reject de lo contrario se resolve
*/


const promise = () => {
  return new Promise (()=>{
    setTimeout(()=>{},2000)
  })
}