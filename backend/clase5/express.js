const express = require("express")
const app = express() 
const path = require("path")
const PORT = process.env.PORT || 8080 

app.get("/", (req, res) =>{
    // res.send("Hola mundo")
    res.sendFile(path.join(__dirname + "/index.html"))
})

app.get("/visitas", (req, res) => {
    const count = 1
    res.send(`<h1>La cantidad de visitas: ${count}</h1>`)
    count++
})

app.get("fyh", (req, res) => {
    const d = moment().format("DD/MM/YY hh:ss:mm")
    res.send({fyh: d})
})

app.listen(PORT, () => {
    console.log("Server is running on port 3002")
})