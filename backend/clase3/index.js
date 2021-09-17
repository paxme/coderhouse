// async y sync funciones
 // arrow function

 const max = (x,y) => Math.max(x,y)

 const callback = (cb) => cb()

 const log = () => console.log("Hello")

//  callback(log)

 const saludar = u => 'hola ' + u

 const adios = u => 'adios ' + u

 const crearSaludo = (cb, u) => cb(u)

//  console.log(crearSaludo(saludar, 'jorge'))

const op = (x, y, cb) => cb(x,y)

const sumar = (x, y) => x + y

const resta = (x, y) => x - y

const div = (x, y) => x / y

const mult = (x, y) => x * y

console.log(op(5,5,div))

console.log("start")

setTimeout(() => {
    console.log("Timeout")
}, 1000)

Promise.resolve("Promise")
.then(res => console.log(res))

console.log("end")