const express = require('express')
const app = express()
const bookRoute = require("../src/routes/book.route")
const cors = require('cors')
const userRoute = require('./routes/user.route')
//Routes 
app.use(cors())
app.use(express.json())
app.use('/books',bookRoute)
app.use('/users',userRoute)

module.exports = app