const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('request from books');
  console.log('authentication', req.headers['authentication']);
  console.log('content-type', req.headers['content-type']); // node converts all headers to lowercase
  next();
});

const lastLayerMiddleware = (req, res, next) => {
  console.log('last layer middleware');
  next();
};

router.get('/', lastLayerMiddleware, (req, res) => {
  res.json({ message: 'Book created' });
});

router.get('/something', (req, res) => {
  res.json({ message: 'This is something' });
});
// /api/books/:id
router.get('/:booksId', (req, res) => {
  console.log(req.params);
  res.json({ name: 'Harry', pages: '654' });
});

router.get('/:booksId/authors/:authorsId', (req, res) => {
  // req.params === path parameters we fetch from our path
  //req.query === query parameters e.g ?key=value
  console.log(req.params);
  console.log(req.query);
  res.json({ book: 'book459', author: 'Larry Johnson' });
});

router.post('/', (req, res) => {
  res.json({ message: 'message sent', books: req.body });
});

module.exports = router;
