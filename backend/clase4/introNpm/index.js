const moment = require('moment')

console.log(`hoy es ${moment().format("DD/MM/YYYY")}`)
console.log(`Naci el ${moment("2000-07-31").format("DD/MM/YYYY")}`)
console.log(`Han pasado ${moment().diff(moment("2000-07-31"))}`)

