const express = require('express')
const handlebars = require('express-handlebars')
const {Contenedor} = require('./Contenedor')
const PORT = 8080
const app = express()
const c = new Contenedor('productos.txt')
const server = require('http').Server(app)
const { Server } = require('socket.io')
const io = new Server(server)


app.use(express.json())
    .use(express.urlencoded({ extended: true }))


app.engine('handlebars', handlebars({
    extname: '.hbs',
    layoutsDir: __dirname + '/views/layouts',
}))

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))

// GET
app.get("/", async (req, res) => {
    const products = await c.getAll()
    res.render('main', {layout: 'layouts/index.hbs', products: products})
})

// POST

app.post('/productos', async (req, res) => {
    const product = {
        title: req.body.title,
        price: req.body.price,
        thumbnail: req.body.thumbnail
    }
    const id = await c.save(product)
})

io.on('connection', (socket) => {
    console.log("Usuario conectado!")
    socket.on('new_product', async (data) => {
        await c.save(data)
        io.sockets.emit("new_update", data)
    })
})


server.listen(PORT, () => {
    console.log("server is up on port 8080")
})