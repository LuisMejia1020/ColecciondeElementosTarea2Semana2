class Pelicula{
    genero=''
    protagonista=''
    villano=''
    nombre=''

    constructor(genero, protagonista, villano, nombre){
        this.genero = genero
        this.protagonista = protagonista
        this.villano = villano
        this.nombre = nombre

    }

    peliculafavorita(){
        console.log('mi pelicula favorita tiene que ser de ', this.genero)
    }
}

var pelicula = new Pelicula('horror', 'eren', 'eren', 'attack on titan')

console.log(pelicula)
pelicula.peliculafavorita()

module.exports = Pelicula