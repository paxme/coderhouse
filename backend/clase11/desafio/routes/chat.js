const express = require('express')
const { Router } = express
const {Contenedor} = require('../models/Contenedor')
const chatModel = new Contenedor('chat.txt')

const router = new Router()

// GET
router.get("/", async (req, res) => {
    const chat = await chatModel.getAll()
    res.render('chat', {layout: 'layouts/index.hbs', messages: chat})
})


module.exports = router