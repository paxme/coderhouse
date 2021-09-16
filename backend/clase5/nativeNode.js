const os = require("os")

let arq = os.arch()

let user = os.hostname()

let plat = os.platform()

console.log(arq)
console.log(user)
console.log(plat)
