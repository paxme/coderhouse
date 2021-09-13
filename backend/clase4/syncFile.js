const fs = require('fs')

// write
fs.writeFileSync("./test.txt", "alzate cardonda", "utf-8")

// read
console.log(fs.readFileSync("./test.txt", "utf-8"))

// append
fs.appendFileSync('./test.txt', '\ndiego alejandro')

// delete
fs.unlinkSync("./test.txt")

// manejo de errores
try {
    fs.readFileSync("no existe")
} catch (e) { 
    console.log("no existe archivo")
}