const logger = (req, res, next) => {
  console.log('Recieved', {
    URL: req.url,
    METHOD: req.method,
    TiME: new Date().getTime(),
    Body: req.body,
    params: req.params,
    query: req.query,
  });
  next();
};

module.exports = logger;
