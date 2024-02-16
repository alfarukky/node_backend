function books(req, res) {
  //crud operations
  //create, read, update, delete
  //POST, GET, PUT, DELETE
  //POST /books
  if (req.method === 'POST') {
    //create a book
  }
  //GET /books
  if (req.method === 'GET') {
    //get all books
  }
  //GET /books/:id
  if (req.method === 'GET') {
    //get a book by id
  }
  //PUT /books/:id
  if (req.method === 'PUT') {
    //get a book by id
  }
  //DELETE /books/:id
  if (req.method === 'DELETE') {
    //delete book by id
  }
  res.send('books API');
}

module.exports = books;
//module.exports = { books }; named exports
