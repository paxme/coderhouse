const express = require('express')
const { Router } = express
const { Container } = require('../models/Container')
const c = new Container('src/products.txt')

const router = new Router()

// Middleware
const isAdmin = (req, res, next) => {
    const method = Object.entries(req.route.methods).find(o => o[1])[0]

    if (req.body.admin) {
        next()
    } else {
        res.json({
            error: -1,
            body: `route ${req.route.path} method ${method} not authorized`
        })
    }
}

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
router.post('/', isAdmin, async (req, res) => {
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

router.delete('/:id', isAdmin, async (req, res) => {
    await c.deleteById(+req.params.id)
    res.json({
        stausCode: 200,
        body: `deleted product with the id: ${req.params.id}`
    })
})

// PUT

router.put('/:id', isAdmin, async (req, res) => {
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