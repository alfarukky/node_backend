const getServices = require('../services/books.services');

const getBooks = (req, res) => {
  const { page = 1, limit = 10, query = null } = req.query;
  const result = getServices.getBooks(page, limit, query);
  res.json(result);
};

const getSomething = (req, res) => {
  console.log(req.params);
  console.log(req.query);
  const { page = 1, limit = 10, query = null } = req.query;
  const result = getServices.getSomething(page, limit);
  res.json(result);
};

const getBooksById = (req, res) => {
  console.log(req.params);
  const { bookId } = req.params;
  const result = getServices.getBooksById(bookId);
  res.json(result);
};

const getBooksByIdAndAuthorId = (req, res) => {
  const { authorId, bookId } = req.params;
  const result = getServices.getBooksByIdAndAuthorId(authorId, bookId);
  res.json(result);
};

module.exports = {
  getBooks,
  getSomething,
  getBooksById,
  getBooksByIdAndAuthorId,
};
