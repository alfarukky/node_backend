export const adminMilddlere = (req, res, next) => {
  console.log('admin Middleware');
  if (req?.user?.role !== 'ADMIN') {
    return res.status(403).json({ message: 'Forbidden' });
  }
  next();
};
