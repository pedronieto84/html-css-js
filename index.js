

// Definición de una clase. Una clase es como un molde donde agrupo logica y codigo. 
class Perro {
    // Propiedades de una clase 
    nombre
    edad
    raza

    constructor(nombre, edad, raza){
        // This es una keyword reservada de las clases que hace referenci a esta clase.
        this.nombre = nombre
        this.edad = edad
        this.raza = raza
    }
    // Esto es un METODO dentro de un objeto
    ladra(){
        console.log('guau', this.nombre )
    }

    getEdad(){
        console.log('edad', this.edad)
    }

    getRaza(){
        console.log('raza', this.raza)
    }
}

// Instanciando la clase perro y genero el objeto tobby
const tobby = new Perro('tobby', 7, 'yorkshire')
const sunny = new Perro('sunny', 5, 'pastor aleman')


// Llamo al metodo de tobby
tobby.ladra()
sunny.ladra()
tobby.getEdad()
sunny.getRaza()