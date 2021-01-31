/* eslint-disable linebreak-style */
const express = require('express');

const app = express();
const bookRouter = express.Router();
const port = process.env.PORT || 3000;

bookRouter.route('/books')
  .get((req, res) => {
    const responce = { book: 'JavaScript the Good parts' };
    res.json(responce);
  });

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to RESTful web services.');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening to port: ${port}`);
});
