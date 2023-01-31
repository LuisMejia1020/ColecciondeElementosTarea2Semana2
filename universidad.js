class Universidad {
    nombre=''
    carrera=''
    escuelaprocedente=''
    direccion=''
    rector=''

    constructor(nombre, carrera, escuelaprocedente, direccion, rector){
        this.nombre = nombre
        this.carrera = carrera
        this.escuelaprocedente = escuelaprocedente
        this.direccion = direccion
        this.rector = rector
    }

    estudiar(){
        console.log('yo estudio en ' + this.nombre + 'me parece un buen lugar para estudiar ' + this.carrera)
    }
}

var universidad1 = new Universidad ('unitec', 'programacion', 'del campo', 'el hoyo', 'luis lanza')
var universidad2 = new Universidad ('politecnico', 'derecho', 'mayan', 'el hoyo', 'hobed')
var universidad3 = new Universidad ('unah', 'periodismo', 'macris', 'el hoyo', 'luis lanza')
var universidad4 = new Universidad ('unitec', 'programacion', 'del campo', 'el hoyo', 'luis lanza')

console.log(universidad1)
console.log(universidad2)
console.log(universidad3)
console.log(universidad4)

universidad1.estudiar()
universidad2.estudiar()
universidad3.estudiar()
universidad4.estudiar()

module.exports = Universidad
