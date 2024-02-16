const http = require('http');
const behavior = require('./behavior');

// const behavior = (req, res) => {
//   // if (req.url === '/') {
//   //   res.write('Hello from root page');
//   // } else if (req.url === '/about') {
//   //   res.write('Hello from about page');
//   // } else if (req.url === '/contact') {
//   //   res.write('Hello from contact page');
//   // } else {
//   //   res.write('Hello from page' + req.url);
//   // }
//   res.end('\nended');
// };
const server = http.createServer(behavior);

const money = 10_000;
console.log(money);
server.listen(5000, () => {
  console.log('server is running on port 5000');
});
