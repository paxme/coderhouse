const express = require("express")
const { Router } = express
const router = new Router()

const arr = [
    {
        nombre: "thor",
        edad: 2
    },
    {
        nombre: "scott",
        edad: 4
    }
]

router.get("/", (_ , res) => {
    res.send({body: arr})
})

router.post("/", (req,res) => {
    const {nombre, edad} = req.body
    arr.push({nombre, edad})
    res.send("Mascota guardada")
})

module.exports = router