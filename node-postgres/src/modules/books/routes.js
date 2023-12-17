const express = require('express');
const router = express.Router();
const BooksControllers = require('./controllers');

router.get('/books/:id', BooksControllers.GetBookById);
router.delete('/books/:id', BooksControllers.DeleteBook);
router.get('/books', BooksControllers.GetBooks);
router.post('/books', BooksControllers.PostBook);

module.exports = router;