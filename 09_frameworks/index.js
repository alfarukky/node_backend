const express = require('express');
const bookroute = require('./books.route');
const logger = require('./logger');
const app = express();

//middleware
app.use(express.json());
app.use(express.static('public'));
app.use(logger);
app.use('/books', bookroute);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.all('*', (req, res) => {
  res.status(404).jsonp({ message: 'page not found' });
});
app.listen(3000, () => console.log('Server is running on port 3000'));
