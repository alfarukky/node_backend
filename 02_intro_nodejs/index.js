//create a simple server
const http = require('http');
const path = require('path'); //path module
const fs = require('fs');
const os = require('os');
// create server
const server = http.createServer((req, res) => {
  // res.end('Welcome altSchoolers');
  // console.log(path.dirname(__filename) + '/index.js');
  // fs.mkdir(path.dirname(__filename) + '/test', (err) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log('file have been created');
  //   }
  // });
  if (req.url === '/') {
    res.write('Hello World');
    console.log(process.env.NODE_ENV);
    console.log(os.platform());
    res.end();
  } else if (req.url === '/hello' && req.method === 'POST') {
    res.write('Welcome altSchoolers');
    console.log(process.version);
    console.log(req.url);
    console.log(req.method);
    res.end();
  } else {
    res.write(`what are you looking for here....`);
    res.end();
  }
});

server.listen(8000, null, null, () => {
  console.log('Server is running on port 8000');
});
