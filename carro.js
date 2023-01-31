class Carro {
    marca=''
    modelo=''
    ano=''
    color=''

    constructor(marca, modelo, ano, color){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.color = color
    }

    manejar(){
        console.log('a mi me gusta manejar carros rapido como ' + this.marca)
    }
}

var carro1 = new Carro ('bugatti', 'x8988', 2020,'negro')
var carro2 = new Carro ('mazerati', 'x54', 2020,'negro')
var carro3 = new Carro ('mercedes benz', 'x8988', 2020,'negro')

console.log(carro1)
console.log(carro2)
console.log(carro3)

carro1.manejar()
carro2.manejar()
carro3.manejar()

module.exports = Carro