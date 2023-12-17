const pool = require('../../../db.config');

async function selectBooks() {
  return await pool.query('SELECT * FROM books');;
}

async function selectBookById(id) {
  return await pool.query(`SELECT * FROM books WHERE id=${id}`);
}

async function createBook(data) {
  const { title, author } = data;
  await pool.query('INSERT INTO books (title, author) VALUES ($1, $2)', [title, author]);
}

async function deleteBook(id) {
  await pool.query(`DELETE FROM books WHERE id=${id}`);
}

// research required - how to delete all element from a table
async function deleteAllBooks() {
  await pool.query(``);
}

module.exports = {
  selectBooks,
  selectBookById,
  createBook,
  deleteBook,
  deleteAllBooks
}