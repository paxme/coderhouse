const express = require('express')
const app = express()
const server = require('http').Server(app)
const { Server } = require('socket.io')
const io = new Server(server)

app.use('/', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

io.on('connection', (socket) => {
    console.log("Usuario conectado!")
    io.emit('connected', {data: "Connected"})
    io.on('client-message', (msg) => {
        console.log(msg)
    })
})

server.listen(8080, () => {
    console.log("Server is up")
})