const { getBooks, getSomething } = require('../services/books.services');

const getBooksController = (req, res) => {
  const { page = 1, limit = 10, query = null } = req.query;
  const result = getBooks(page, limit, query);
  res.json(result);
};

const getSomethingController = (req, res) => {
  console.log(req.params);
  console.log(req.query);
  const { page = 1, limit = 10, query = null } = req.query;
  const result = getSomething(page, limit);
  res.json(result);
};

// const getBooksIdController = (req, res) => {
//   console.log(req.params);
//   const {bookId} = req.params;
//   const result = getBookById(bookId);
//   res.json(result);
// }

module.exports = { getBooksController, getSomethingController };
