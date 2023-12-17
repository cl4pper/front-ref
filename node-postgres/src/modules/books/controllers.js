const BooksServices = require('./services');

async function GetBooks(req, res) {
  try {
    const data = await BooksServices.selectBooks();

    if(!data.rows.length) return res.status(204);

    return res.status(200).send(data.rows);
  } catch(err) {
    return res.status(500).send(`Error at GetBooks: ${err}`);
  }
};

async function GetBookById(req, res) {
  const {id} = req.params;
  try {
    const data = await BooksServices.selectBookById(id);
    if(!data.rowCount) return res.status(204).send({ message: 'Book does no exist'});

    return res.status(200).send(data.rows[0]);
  } catch(err) {
    return res.status(500).send(`Error at GetBookById: ${err}`);
  }
};

async function PostBook(req, res) {
  const { title, author } = req.body;
  try {
    if (!title || !author) return res.status(400).send({ message: 'Requires title and author'});

    const data = await BooksServices.createBook({title, author});

    return res.status(200).send(data);
  } catch(err) {
    return res.status(500).send(`Error at PostBook: ${err}`);
  }
};

async function DeleteBook(req, res) {
  const {id} = req.params;
  try {
    if(!id) return res.status(400).send({ message: 'ID is required' });

    const book = await BooksServices.selectBookById(id);
    if (!book.rowCount) res.status(400).send({ message: 'Book does not exist' });

    const data = await BooksServices.deleteBook(id);

    return res.status(200).send(data);
  } catch(err) {
    return res.status(500).send(`Error at DeleteBook: ${err}`);
  }
};

async function ClearBooks(_, res) {
  try {
    const data = await BooksServices.deleteAllBooks();

    return res.status(200).send(data);
  } catch(err) {
    return res.status(500).send(`Error at ClearBooks: ${err}`);
  }
};

module.exports = {
  GetBooks,
  GetBookById,
  PostBook,
  DeleteBook,
  ClearBooks
}