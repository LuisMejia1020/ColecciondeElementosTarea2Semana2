class Serie {
    nombre=''
    genero=''
    canal=''
    hora=''
    protagonista=''

    constructor(nombre, genero, canal, hora, protagonista){
        this.nombre = nombre
        this.genero = genero
        this.canal = canal
        this.hora = hora
        this.protagonista = protagonista
    }

    ver(){
        console.log('por lo general veo mas anime pero ' + this.nombre +' me tiene atrapado')
    }
}

var serie1 = new Serie ('breaking bad','suspenso', 'axn', 5, 'heisenberg')
var serie2 = new Serie ('better call saul','suspenso', 'axn', 6, 'saul goodman')
var serie3 = new Serie ('peaky blinders','suspenso', 'hbo', 1, 'tommy shelby')
var serie4 = new Serie ('the last of us','suspenso', 'hbo', 8, 'pedro pascal')
var serie5 = new Serie ('avatar','aventura', 'cartoon network', 5, 'hang')

console.log(serie1)
console.log(serie2)
console.log(serie3)
console.log(serie4)
console.log(serie5)

serie1.ver()
serie2.ver()
serie3.ver()
serie4.ver()
serie5.ver()

module.exports = Serie