const { getAuthor } = require('../services/author.services');

const getAuthorController = (req, res) => {
  console.log(req.params);
  console.log(req.query);
  const { page = 1, limit = 10 } = req.query;
  const result = getAuthor(page, limit);
  res.json(result);
};

module.exports = { getAuthorController };
