const express = require('express');
const {
  getBooksController,
  getSomethingController,
} = require('../controllers/book.controller');
const router = express.Router();

router.use((req, res, next) => {
  console.log('request from books');
  console.log('authentication', req.headers['authentication']);
  console.log('Content-type', req.headers['content-type']); // node converts al headers to lowercase
  next();
});

const lastLayerMiddleware = (req, res, next) => {
  console.log('last layer middleware called');
  next();
};

router.get('/', lastLayerMiddleware, (req, res) => {
  getBooksController(req, res);
});

router.get('/something', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  getSomethingController(req, res);
});

router.get('/:bookId', (req, res) => {
  console.log(req.params);
  res.json({ name: `book${req.params.bookId}` });
});

module.exports = router;
