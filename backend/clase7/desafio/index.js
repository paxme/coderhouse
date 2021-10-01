const express = require('express')
const app = express()
const productsRouter = require('./routes/productos')
const PORT = process.env.PORT || 8080

app.use(express.json())
    .use(express.urlencoded({ extended: true }))

app.use('/', express.static(__dirname + '/public'))

app.use('/api', productsRouter)

app.listen(PORT, () => {
    console.log('Server is up on port 8080')
})

app.on('error', error => console.log(`Error en servidor ${error}`))
