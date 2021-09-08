// async y sync funciones
 // arrow function

 const max = (x,y) => Math.max(x,y)

 const callback = (cb) => cb()

 const log = () => console.log("Hello")

//  callback(log)

 const saludar = u => 'hola ' + u

 const adios = u => 'adios ' + u

 const crearSaludo = (cb, u) => cb(u)

 console.log(crearSaludo(saludar, 'jorge'))