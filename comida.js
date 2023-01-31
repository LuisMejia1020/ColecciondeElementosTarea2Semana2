class Comida {
    lugar=''
    especialidad=''
    precio=''
    favorito=''

    constructor(lugar, especialidad, precio, favorito,){
        this.lugar = lugar
        this.especialidad = especialidad
        this.precio = precio
        this.favorito = favorito
    }

    comer(){
        console.log('yo solo como en ' + this.lugar + 'y podria decir que ' +this.favorito + 'es mi plato favorita')
    }
}

var comida1 = new Comida('dotoramen', 'especias y magia', 30, 'ramen')
var comida2 = new Comida('1995', 'hamburguesa', 30, 'la comidita')
var comida3 = new Comida('terceto', 'carne', 30, 'rib eye')
var comida4 = new Comida('el padrino', 'paasta', 30, 'fetuccini')

console.log(comida1)
console.log(comida2)
console.log(comida3)
console.log(comida4)

comida1.comer()
comida2.comer()
comida3.comer()
comida4.comer()

module.exports = Comida