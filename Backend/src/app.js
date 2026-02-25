const express = require('express')
const app = express()
const bookRoute = require("../src/routes/book.route")

//Routes 

app.use('/book',bookRoute)

module.exports = app