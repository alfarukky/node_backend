const http = require('http');

//HTTP METHODS
//GET - GET data
//POST - create data
//PUT - update data
//PATCH - update data partially
//DELETE - delete data

const behavior = (req, res) => {
  //handle the following request
  //PuT /books/author/
  //Post request
  console.log(req.method); //GET, POST, PUT, DELETE
  console.log(req.url); //books
  if (req.method === 'GET' && req.url === '/books') {
    res.write(
      JSON.stringify([
        { titles: 'The Alchemist', pages: 200 },
        { titles: 'The Alchemist', pages: 200 },
      ])
    );
  }

  if (req.method === 'POST' && req.url === '/books') {
    res.write('Hello from POST /books');
  }

  if (req.method === 'PUT' && req.url === '/books/author') {
    res.write('Hello from PUT /books/author');
  }

  res.write('Hello form page' + req.url);
  res.end();
};
//create server
const server = http.createServer(behavior);

server.listen(8000, () => {
  console.log('Server is running on port 8000');
});

//http:localhost:8000/books?title=Alchemist&pages=200

//scheme = http
//host = localhost
//port = 8000
//path = /books
//query= ?title=Alchemist
//titlr = Alchemist
//pages =200
