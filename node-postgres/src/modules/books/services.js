const pool = require('../../../db.config');

async function selectBooks() {
  return await pool.query('SELECT * FROM books');;
}

async function createBook(data) {
  const { title, author } = data;
  await pool.query('INSERT INTO books (title, author) VALUES ($1, $2)', [title, author]);
}

module.exports = {
  selectBooks,
  createBook
}