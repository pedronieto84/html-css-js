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
  