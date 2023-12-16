const BooksServices = require('./services');

async function GetBooks(req, res) {
  try {
    const data = await BooksServices.selectBooks();

    if(!data.rows.length) return res.status(204);

    return res.status(200).send(data.rows);
  } catch(err) {
    return res.status(500).send(`Error at GetBook: ${err}`);
  }
};


async function PostBook(req, res) {
  const data = req.body;

  try {
    if (!data.title || !data.author) return res.status(400);
    await BooksServices.createBook(data);
    return res.status(200).send();
  } catch(err) {
    return res.status(500).send(`Error at PostBook: ${err}`);
  }
};

module.exports = {
  GetBooks,
  PostBook
}