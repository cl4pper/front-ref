const express = require('express');
const router = express.Router();
const BooksControllers = require('./controllers');

router.get('/books', BooksControllers.GetBooks);
router.post('/book', BooksControllers.PostBook);

module.exports = router;