const fs = require('fs')

fs.readFile('fyh.txt', "utf-8", (err, data) => {
    if (err) throw "Error al leer"
    console.log(data)
})

fs.writeFile("new.txt", "new async", "utf-8", (err) => {
    if (err) throw "Error al escribir"
})

fs.appendFile("new.txt", " data", "utf-8", (err) => {
    if (err) throw "Error al actualizar"
})

