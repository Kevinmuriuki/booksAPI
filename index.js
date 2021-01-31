/* eslint-disable linebreak-style */
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI');
const bookRouter = express.Router();
const port = process.env.PORT || 3000;
const Book = require('./models/bookModel');

bookRouter.route('/books')
  .get((req, res) => {
    Book.find((err, books) => {
      if(err) {
        return res.send(err);
      }
      return res.json(books);
    });
  });

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to RESTful web services.');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening to port: ${port}`);
});
