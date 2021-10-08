const express = require('express')
const app = express()
const { Server } = require('socket.io')
const http = require('http')
const server = http.createServer(app)
const io = new Server(server)

const routes = require('./routes/index')
const port = process.env.PORT || 8080

app.use(express.static(__dirname + '/public'))

app.use('/api', routes)

io.on("connection", (socket) => {
    console.log("connected socket")
})

server.listen(port, () => {
    console.log("server is up on port " + port)
})