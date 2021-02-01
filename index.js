/* eslint-disable linebreak-style */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

if (process.env.ENV === 'Test') {
  console.log('This is a test');
  const db = mongoose.connect('mongodb://localhost/booksAPI_Test');
} else {
  console.log('This is not a test');
  const db = mongoose.connect('mongodb://127.0.0.1:27017/bookApi-real');
}

const port = process.env.PORT || 3000;
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to RESTful web services.');
});

// added app.server in order to assist closing the application at the end of an integration test
app.server = app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});

module.exports = app;
