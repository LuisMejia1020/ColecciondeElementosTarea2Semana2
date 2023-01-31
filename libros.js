class Libro {
    nombre=''
    autor=''
    editorial=''
    ano=''
    genero=''

    constructor(nombre, autor, editorial, ano, genero ){
        this.nombre = nombre
        this.autor = autor
        this.editorial = editorial
        this.ano = ano
        this.genero = genero

        
    }

    leer(){
        console.log('mi libro favorito siempre va a ser ' + this.nombre + 'y mi autor favorito es ' + this.autor)
    }

}

var libro1 = new Libro('jujutsu kaisen', 'gege akutami', 'shonen jump', 2018,'terror')
var libro2 = new Libro('one piece','oda','shonen jump',2000,'aventura')
