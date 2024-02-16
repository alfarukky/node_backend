const behavior = (req, res) => {
  switch (req.url) {
    case '/':
      res.statusCode = 201;
      res.write('Hello from root page');
      break;
    case '/about':
      res.statusCode = 418;
      res.write('Hello from about page');
      break;
    case '/contact':
      res.write('Hello from contact page');
      break;
    default:
      res.write('Hello from page' + req.url);
      break;
  }
  res.end();

  //set response statuscode
  // res.statusCode = 400;
  res.end();
};

module.exports = behavior;
