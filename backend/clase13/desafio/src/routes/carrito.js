const express = require('express')
const { Router } = express
const router = new Router()
const { Contenedor } = require('../models/Contenedor')
const contenedorCarrito = new Contenedor('src/carrito.txt')
const contenedorProductos = new Contenedor('src/productos.txt')

// Post

router.post('/', async (req, res) => {
    const r = await contenedorCarrito.save({
        timestamp: new Date.now()
    })
    res.json({
        statusCode: 200,
        body: `Created a cart with id: ${r}`
    })
})

router.post('/:id/productos', (req, res) => {
    
})

// Delete

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    await contenedorCarrito.deleteById(+id)
    res.json({
        statusCode: 200,
        body: `Deleted a cart with the id: ${id}`
    })
})

// Get

router.get('/:id/productos', (req, res) => {
    const carrito = await contenedorCarrito.getById(+req.params.id)
    res.json({
        statusCode: 200,
        body: carrito
    })
})


module.exports = router