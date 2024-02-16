const http = require('http');
const books = require('./books');
const server = http.createServer((req, res) => {
  if (req.url === '/books') {
    books(req, res);
  }

  if (req.url === '/authors') {
    authors(req, res);
  }
  res.write('Hello world');
  res.end();
});

server.listen(3000, () => {
  console.log('server is running on port 3000');
});
