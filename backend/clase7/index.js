// router y multer
const express = require('express')
const app = express()
const { Router } = express
const router = Router()
const productsRoute = require("./routes/products")
app.use(express.json())
    .use("/products", productsRoute)

router.get("/hola", (_, res) => {
    res.json({
        body: "hi"
    })    
})

app.listen(8080, () => {
    console.log("server is up on port 8080")
})