const http = require("http")
const moment = require('moment')

const server = http.createServer((req, res) => {
    const hour = moment().hour()
    const msg =
      hour > 6 && hour < 9
        ? "Buenos dias"
        : hour > 13 && hour < 19
        ? "Buenas Tardes"
        : "Buenas noches"
        
    res.end(`
    <h1> Hola mundo con HTTP node</h1>
    <p> ${msg} </p>
    `)
})

const portListen = server.listen(3002, () => {
    console.log("server is running on port 3002")
})

