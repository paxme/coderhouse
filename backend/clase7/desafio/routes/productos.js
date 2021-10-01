const express = require("express")
const { Router } = express
const router = new Router()
const Contendor = require('../Contenedor')
const c = new Contendor("productos.txt")
const multer = require('multer')

let storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "uploads")
    },
    filename: (req, file, cb) => {
        cb(null, "_coder_" + file.originalname)
    }
})

let upload = multer({storage})

// GET

router.get('/productos', async (_, res) => {
    res.json({
        body: await c.getAll()
    })
})

router.get('/productoRandom', async (_, res) => {
    pLength = (await c.getAll()).length
    res.json({
        body: await c.getById(Math.ceil(Math.random() * pLength))
    })
})

router.get('/productos/:id', async (req, res) => {
    producto = await c.getById(+req.params.id)
    console.log(req.params.id, producto)
    res.json({
        body: producto
    })
})

// POST

router.post('/productos', upload.single("thumbnail"), async (req, res) => {
    console.log(req.body)
    let file = req.file
    if (!file) {
        res.send({message: "error al subir arcivo"})
        return
    }
    const product = {
        title: req.body.title,
        price: req.body.price,
        thumbnail: req.file.filename
    }
    const id = await c.save(product)
    res.json({
        body: `created product with id: ${id}`
    })
})

// PUT

router.put('/productos/:id', async (req, res) => {
    console.log(req.body)
    await c.update({
        id: +req.params.id,
        ...req.body
    })
    res.json({
        body: "Updated product!"
    })
})

// DELETE

router.delete('/productos/:id', async (req, res) => {
    await c.deleteById(+req.params.id)
    res.json({
        body: "Deleted product!"
    })
})

module.exports = router