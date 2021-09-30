const express = require('express')
const multer = require('multer')
const app = express()

let storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "uploads")
    },
    filename: (req, res, cb) => {
        cb(null, "_coder_" + req.file.originalname)
    }
})

let upload = multer({storage})

app.post("/image", upload.single("myfile"), (req, res) => {
    let file = req.file
    if (!file) {
        res.send({message: "error al subir arcivo"})
        return
    }

    res.send({message: "archivo subido correctamente"})
})

app.listen(8080, () => {
    console.log("server is up on port 8080")
})