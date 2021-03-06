import express from 'express'
import handlebars from 'express-handlebars'
import {Contenedor} from './Contenedor'
const PORT = 8080
const app = express()
const c = new Contenedor('productos.txt')


app.use(express.json())
    .use(express.urlencoded({ extended: true }))


app.engine('handlebars', handlebars({
    extname: '.hbs',
    layoutsDir: __dirname + '/views/layouts',
}))

app.set('view engine', 'hbs')

// GET
app.get("/", (req, res) => {
    res.render('main', {layout: 'layouts/index.hbs'})
})

app.get("/productos", async (req, res) => {
    const products = await c.getAll()
    res.render('products', {layout: 'layouts/index.hbs', products: products})
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