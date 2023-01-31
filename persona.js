const persona12 =[
    {
        nombre: 'Satoru Gojo',
        profesion: 'Mago',
        edad: '28',
        hobby:'pasarla bien',
        tecnica: 'infinito y los 6 ojos'
    }
]



class Persona {
    nombre = 'Satoru Gojo'
    profesion = 'mago'
    edad = '28'
    hobby = 'pasarla bien'
    tecnica = 'infinito'

    constructor(nombre, profesion, edad, hobby, tecnica){
        this.nombre = nombre
        this.profesion = profesion
        this.edad = edad
        this.hobby = hobby
        this.tecnica = tecnica
    }

    exorcisar(){
        console.log('el hechicero mas poderoso es ' + this.nombre)
    }
}

var persona1 = new Persona ('Satoru Gojo', 'mago', 28, 'pasarla bien', 'infinito')
console.log(persona1)
persona1.exorcisar()

module.exports = Persona