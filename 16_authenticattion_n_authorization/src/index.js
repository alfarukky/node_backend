import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import authRoute from './routes/auth.route.js';
import userRoute from './routes/users.route.js';

dotenv.config();
const app = express();
const { MONGO_URL } = process.env;
const { PORT } = process.env;

//middleware
app.use(express.json());

//Routes
app.use('/auth', authRoute);
app.use('/users', userRoute);

//catch all routes
app.all('*', (req, res) => {
  res.status(404).json({ message: 'Not found' });
});

mongoose.connect(MONGO_URL).then(() => {
  console.log('connnected to DB....');
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
});
