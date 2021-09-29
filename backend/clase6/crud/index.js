const express = require('express')
const arr = require('./arr')
const app = express()
const frase = "hola mundo como estan"
app.use(express.json())

// GET
app.get("/users", (_, res) => {
    res.json({
        message: "users",
        data: arr
    })
})

app.get("/user/:id", (req, res) => {
    res.json({
        message: "found him",
        data: arr.find(p => p.id === +req.params.id)
    })
})

app.get("/api/frase", (req,res) => {
    res.json({
        statusCode: 200,
        message: frase
    })
})

// POST
app.post("/user", (req, res) => {
    console.log(req.body.body)
    res.send("ok")
})

// DELETE


// PUT

app.listen(8080, () => {
    console.log("Server is up on port 8080")
})
