const express = require('express')
const { Router } = express
const router = new Router()
const { Contenedor } = require('../models/Contenedor')
const c = new Contenedor('src/carrito.txt')

