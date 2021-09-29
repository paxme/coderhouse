const express = require("express")
const { Router } = express
const router = new Router()

const arr = [
    {
        nombre: "diego",
        id: 1
    },
    {
        nombre: "juan",
        id: 2
    }
]

router.get("/", (_ , res) => {
    res.send({body: arr})
})

router.post("/", (req,res) => {
    const {nombre, id} = req.body
    arr.push({nombre, id})
    res.send("Persona guardada")
})

module.exports = router