class Contador{
    static cuentaGlobal = 0

    constructor(responsable) {
        this.responsable = responsable
        this.cuentaIndividual = 0
    }

    obtenerResponsable(){
        return this.responsable
    }

    obtenerCuentaIndividual() {
        return this.cuentaIndividual
    }

    obtenerCuentaGlobal() {
        return Contador.cuentaGlobal
    }

    incremente(num) {
        this.cuentaIndividual += num
        Contador.cuentaGlobal += num
    }
}

const co = new Contador('diego')
const co2 = new Contador('carlos')
const co3 = new Contador('mike')

co.incremente(2)
co2.incremente(3)
co3.incremente(10)

console.log(co.obtenerCuentaIndividual())
console.log(co2.obtenerCuentaIndividual())
console.log(co3.obtenerCuentaIndividual())
console.log(co3.obtenerCuentaGlobal())
