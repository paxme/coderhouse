const express = require('express')
const { Contenedor } = require('./Contenedor')

const PORT = 8080
const app = express()
const c = new Contenedor('productos.txt')


app.use(express.json())
    .use(express.urlencoded({ extended: true }))

app.set('views', './views')

app.set('view engine', 'pug')

// GET
app.get("/", (req, res) => {
    res.render('index')
})

app.get("/productos", async (req, res) => {
    const products = await c.getAll()
    res.render('products', {products: products})
})

// POST

app.post('/productos', async (req, res) => {
    const product = {
        title: req.body.title,
        price: req.body.price,
        thumbnail: req.body.thumbnail
    }
    const id = await c.save(product)
    res.redirect('/productos')
})


app.listen(PORT, () => {
    console.log("server is up on port 8080")
})