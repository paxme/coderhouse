const express = require("express")
const { Router } = express
const router = new Router()

router.get("/", (req, res) => {
    console.log("all the products")
    res.send("done")
})

module.exports = router