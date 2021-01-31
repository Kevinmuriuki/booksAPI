/* eslint-disable linebreak-style */
const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to RESTful web services.');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening to port: ${port}`);
});
