const express = require('express');
const { getAuthorController } = require('../controllers/author.controller');
const authorRoute = express.Router();

authorRoute.get('/', (req, res) => {
  getAuthorController(req, res);
});

authorRoute.get('/:authorId', (req, res) => {
  res.json({ name: 'JK rowling', age: 55 });
});

authorRoute.post('/', (req, res) => {
  res.json({ message: 'Author created', author: req.body });
});

module.exports = authorRoute;
