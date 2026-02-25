require('dotenv').config()
const app = require('./src/app')
const connectDB = require("./src/Config/db.js")

const PORT = process.env.PORT || 3000  

connectDB()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

