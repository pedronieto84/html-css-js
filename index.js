let soyUnNull = null
console.log('null', null)

let soyUnUndefined = undefined
console.log('undefined', soyUnUndefined)

let soyUnBooleano = false
console.log('booleano', soyUnBooleano)

let soyUnNumero = 2
console.log('numero', soyUnNumero)

let soyUnString = 'HOla'
console.log('string', soyUnString)

let soyUnArray = ['ageOfEmpires', 'Civilization', 'HeartsOfIron']
console.log('array', soyUnArray)

let soyUnObject = {
    stringDentroDeUnObject: 'Pedro',
    numberDentroDeUnObject: 38,
    booleanoDentroDeUnObject: true,
    objectDentroDeUnObject: {
        ciudad: 'Terrassa',
        intereses: [
            'leer', 'cine', 'viajar', {nombre: 'Luis'}, [1,2,3 ], soyUnString
        ]
    }
}
console.log('object', soyUnObject)

function loguearNombre(soyUnString){
    console.log('loguear', soyUnString)
}
console.log('funcion', loguearNombre)