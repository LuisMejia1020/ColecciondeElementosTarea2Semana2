class Ropa {
    marca=''
    lugarventa=''
    precio=''
    material=''

    constructor(marca, lugarventa, precio, material){
        this.marca = marca
        this.lugarventa = lugarventa
        this.precio = precio
        this.material = material
    }

    vestir(){
        console.log('yo solamente visto ' + this.marca + 'y si no me voy al ' + this.lugarventa)
    }
}

var ropa1 = new Ropa('lacoste', 'miami', 80, 'algodon')
var ropa2 = new Ropa('calvin klein', 'washington', 80, 'algodon')
var ropa3 = new Ropa('adidas', 'paris', 80, 'algodon')
var ropa4 = new Ropa('nike', 'madrid', 80, 'algodon')
var ropa5 = new Ropa('lq', 'berlin', 80, 'algodon')

console.log(ropa1)
console.log(ropa2)
console.log(ropa3)
console.log(ropa4)
console.log(ropa5)

ropa1.vestir()
ropa2.vestir()
ropa3.vestir()
ropa4.vestir()
ropa5.vestir()


module.exports = Ropa
