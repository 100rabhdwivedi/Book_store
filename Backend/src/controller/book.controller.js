const Book = require('../model/book.model')

const getBooks = async (req, res) => {
    try {
        const book = await Book.find()
        res.status(200).json(book)
    } catch (error) {
        console.log("Error in fetching books:",error)
        res.status(500).json(error)
    }
}

module.exports = {getBooks}