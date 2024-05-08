import Jwt from 'jsonwebtoken';
export const authMiddleware = (req, res, next) => {
  console.log('Auth Middleware');
  const authorization = req.headers.authorization;

  const bearerToken = authorization.split(' '); // Authorization: Bearer xxx.
  if (bearerToken.length !== 2) {
    return res.status(401).json({ message: 'unAuthorized' });
  }
  console.log('Token', bearerToken[1]);
  Jwt.verify(bearerToken[1], process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'unAuthorized' });
    }
    console.log('Decoded:', decoded);
    req.user = decoded;
    next();
  });
};
