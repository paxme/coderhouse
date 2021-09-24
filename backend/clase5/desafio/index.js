const express = require('express')
const Contendor = require('./Contenedor')
const c = new Contendor("productos.txt")
const app = express()

// GET

app.get('/productos', async (_, res) => {
    res.json({
        body: await c.getAll()
    })
})

app.get('/productoRandom', async (_, res) => {
    pLength = (await c.getAll()).length
    res.json({
        body: await c.getById(Math.ceil(Math.random() * pLength))
    })
})
app.listen(8080, () => {
    console.log('Server is up on port 8080')
})