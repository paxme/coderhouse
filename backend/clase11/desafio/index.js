const express = require('express')
const handlebars = require('express-handlebars')
const PORT = 8080
const app = express()
const server = require('http').Server(app)
const { Server } = require('socket.io')
const io = new Server(server)
const productsRoutes = require('./routes/products')
const chatRoutes = require('./routes/chat')
const {Contenedor} = require('./models/Contenedor')
const cProductos = new Contenedor('productos.txt')
const cChat = new Contenedor('chat.txt')

app.use(express.json())
    .use(express.urlencoded({ extended: true }))


app.engine('handlebars', handlebars({
    extname: '.hbs',
    layoutsDir: __dirname + '/views/layouts',
}))

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))

app.use('/', productsRoutes)
app.use('/chat', chatRoutes)

io.on('connection', (socket) => {
    console.log("Usuario conectado!")
    socket.on('new_product', async (data) => {
        await cProductos.save(data)
        io.sockets.emit("new_update", data)
    })
    socket.on("new_message", async (data) => {
        try {
            await cChat.save(data)
            io.sockets.emit('update_chat', data)
        } catch (e) {
            console.log(e)
        }
    })
    socket.on("request_messages", async () => {
        console.log("messages have been requested")
        try {
            const messages = await cChat.getAll()
            io.sockets.emit('get_messages', messages)
        } catch (e) {
            console.log(e)
        }
    })
})


server.listen(PORT, () => {
    console.log("server is up on port 8080")
})