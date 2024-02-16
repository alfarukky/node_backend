const http = require('http');

const behavior = (req, res) => {
  if (req.url === '/books' && req.method === 'POST') {
    res.write('Hello from POST /books');
  }
  res.end();
};

const server = http.createServer(behavior);
server.listen(8000, null, null, () => {
  console.log('server listening on port 8000');
});
