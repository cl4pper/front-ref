const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')

// ROUTES
const { BooksRoutes } = require('./modules/books');

// CORS TO LOCALHOST
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api', [BooksRoutes]);

app.get('/api', (req, res) => {
  res.status(200).send();
});

module.exports = app;