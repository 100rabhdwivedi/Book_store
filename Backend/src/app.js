const express = require('express')
const app = express()
const bookRoute = require("../src/routes/book.route")
const cors = require('cors')
//Routes 
app.use(cors())
app.use('/books',bookRoute)

module.exports = app