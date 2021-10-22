const express = require('express')
const { Router } = express
const { Contenedor } = require('../models/Contenedor')
const c = new Contenedor('src/products.txt')

const router = new Router()

// GET
router.get("/:id?", async (req, res) => {
    let products = []
    const id = req.params.id
    if (id) {
        products = await c.getById(+id)
    } else {
        products = await c.getAll()
    }
    res.json({
        stausCode: 200,
        body: products
    })
})

// POST

router.post('/', async (req, res) => {
    const {title, body, thumbnail, timestamp, code, price, stock} = req.body
    const product = {
        title,
        body,
        thumbnail,
        timestamp,
        code,
        price,
        stock
    }
    const id = await c.save(product)
    res.json({
        stausCode: 200,
        body: `created product with the id: ${id}`
    })
})

// DELETE

router.delete('/:id', async (req, res) => {
    await c.deleteById(+req.params.id)
    res.json({
        stausCode: 200,
        body: `deleted product with the id: ${req.params.id}`
    })
})

// PUT

router.put('/:id', async (req, res) => {
    const id = +req.params.id
    await c.update({
        id,
        ...req.body
    })
    res.json({
        stausCode: 200,
        body: `updated product with the id: ${id}`
    })
})

module.exports = router