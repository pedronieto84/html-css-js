let soyelNullmarc = null
console.log(`null`,soyelNullmarc)


let soyelbooleanomarc = true 
console.log(`boolean`,soyelbooleanomarc)

let soyelundefinedmarc
console.log(`undifiend`,soyelundefinedmarc)

let letsoyelstringmarc = marc
console.log(`string`,letsoyelstringmarc)

let soyelnumeromarc =3
console.log(`numero`,soyelnumeromarc)

let soyelarraymarc =[`archero`,`dokkan battle`,`dragon ball legends`]

let soyelobjectmarc = {
    nombre:marc,
    apellido:elhannouti
}

function soylafunctionmarc(soyelarraymarc){
    console.log(`array`,soyelarraymarc)
}
console.log(`funcion`,soylafunctionmarc)


const objetoAnidadoComplejo = {
    user: {
      email: {
        item: [
          {
            email: "adfasdfas",
            password: "adfasdfad",
            item: [
              "adfadfasdf",
              12312312,
              "adsfasdfad",
              ["adsfasdf", [{ email: "pedro.nieto.sanchez@gmail.com" }]],
            ],
          },
        ],
      },
    },
  };
  
  const accederAlItem = objetoAnidadoComplejo.user.email.item[0].item[3][1][0].email
  console.log(accederAlItem)
  