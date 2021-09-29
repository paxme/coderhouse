const express = require("express")
const app = express()
const personRoute = require("./routes/personas")
const petRoute = require("./routes/mascotas")

// how to use absolute paths
app.use("/static", express.static(__dirname + "/public"))
    .use(express.json())
    .use("/personas", personRoute)
    .use("/pets", petRoute)

// middleware a nivel de aplicacion
app.use((req, res, next) => {
    console.log("se ejecuto alguna ruta")
    next()
})

app.listen(8080, () => {
    console.log("server up on port 8080")
})