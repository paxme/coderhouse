// servidores web

// recibir op por la terminal
const op = {
    "add": (a, b) => a + b,
    "rest": (a, b) => a - b,
    "mult": (a, b) => a * b,
    "div": (a, b) => a / b,
}
const params = process.argv.slice(2)

params[2] && params[2] in op 
    && console.log(op[params[2]](+params[0], +params[1]))