const express = require('express')
const { Router } = express
const router = new Router()
const { Contenedor } = require('../models/Contenedor')
const modelCart = new Contenedor('src/carrito.txt')
const modelProducts = new Contenedor('src/products.txt')

// Post

router.post('/', async (req, res) => {
    const r = await modelCart.save({
        timestamp: Date.now(),
        products: []
    })
    res.json({
        statusCode: 200,
        body: `Created a cart with id: ${r}`
    })
})

router.post('/:id/products', async (req, res) => {
    const cartId = req.params.id
    const cart = await modelCart.getById(+cartId)
    const product = await modelProducts.getById(+req.body.id)
    await modelCart.update({
      ...cart,
      products:
        cart.products && cart.products.length
          ? [...cart.products, product]
          : [product],
    })
    res.json({
        statusCode: 200,
        body: `Created a cart with id: ${cartId}`
    })
})

// Delete

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    await modelCart.deleteById(+id)
    res.json({
        statusCode: 200,
        body: `Deleted a cart with the id: ${id}`
    })
})

router.delete('/:id/productos/:id_prod', async (req, res) => {
    const { id: cartId, id_prod: productId } = req.params
    const cart = await modelCart.getById(+cartId)
    await modelCart.update({
        ...cart,
        products: [
            ...cart.products.filter(product => product.id !== +productId)
        ]
    })
    res.json({
        statusCode: 200,
        body: `Deleted a product with the id: ${productId}`
    })
})
// Get

router.get('/:id/products', async (req, res) => {
    const carrito = await modelCart.getById(+req.params.id)
    res.json({
      statusCode: 200,
      body: carrito.products && carrito.products.length ? carrito.products : [],
    })
})


module.exports = router