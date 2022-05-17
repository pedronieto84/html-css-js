
// Diferentes syntaxis para expresar una función

function loguearData(){
    console.log('loguear data')
}

const loguearDatos = () => {
    console.log('loguear data, con arrow functions')
}

(() => {
    console.log('función sin nombre, o anonymous function')
})()

loguearData()
loguearDatos()

