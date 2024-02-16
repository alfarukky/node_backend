const express = require('express');
const port = 3000;
const app = express();

app.get('/write', (req, res) => {
  res.write('Hello world');
  res.write('Hello world');
  res.write('Hello world');
  res.end();
});

app.get('/', (req, res) => {
  res.header('content-type', 'text/html');
  res.send('<h1>Hello World</h1>');
});

app.get('/books', (req, res) => {
  res.send('Hello books');
});

app.post('/', (req, res) => {
  // res.send('Hello world from post');
  res.status(201).json({
    message: 'Hello world',
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
