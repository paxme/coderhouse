import express from 'express'
import handlebars from 'express-handlebars'
import {Contenedor} from './Contenedor'
const PORT = 8080
const app = express()
const c = new Contenedor('productos.txt')
const multer = require('multer')

let storage = multer.diskStorage({
    destination: (_: any, a: any, cb: (arg0: any, arg1: string) => void) => {
        cb(null, "uploads")
    },
    filename: (req: any, file: { originalname: string }, cb: (arg0: any, arg1: string) => void) => {
        cb(null, "_coder_" + file.originalname)
    }
})

let upload = multer({storage})

app.engine('handlebars', handlebars({
    extname: '.hbs',
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'index',
}))

app.set('view engine', 'hbs')

app.get("/productos", async (req, res) => {
    const products = await c.getAll()
    res.render('main', {products: products})
})

// POST

app.post('/productos', upload.single("thumbnail"), async (req, res) => {
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


app.listen(PORT, () => {
    console.log("server is up on port 8080")
})