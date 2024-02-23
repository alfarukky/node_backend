const express = require('express');
const getController = require('../controllers/book.controller');
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

router.get('/', lastLayerMiddleware, getController.getBooks);

router.get('/something', getController.getSomething);

router.get('/:bookId', getController.getBooksById);

router.get(
  '/:booksId/authors/:authorId',
  getController.getBooksByIdAndAuthorId
);

module.exports = router;
