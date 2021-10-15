const express = require('express')
const { Router } = express
const {Contenedor} = require('../models/Contenedor')
const c = new Contenedor('productos.txt')

const router = new Router()

// GET
router.get("/", async (req, res) => {
    const products = await c.getAll()
    res.render('main', {layout: 'layouts/index.hbs', products: products})
})

// POST

router.post('/productos', async (req, res) => {
    const product = {
        title: req.body.title,
        price: req.body.price,
        thumbnail: req.body.thumbnail
    }
    const id = await c.save(product)
})

module.exports = router