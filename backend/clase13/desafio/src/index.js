const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const productsRouter = require('./routes/products')

app.use(express.json())
    .use(express.urlencoded({ extended: true }))

app.use('/api/products', productsRouter)

app.listen(PORT, () => {
    console.log("Port is up on " + PORT)
})