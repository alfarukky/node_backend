import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import userRouter from './routes/user.router.js';
import walletRouter from './routes/wallet.router.js';
import { connect } from './model/connection.js';

const PORT = process.env.PORT || 3000;
const app = express();
dotenv.config();

//middleware
app.use(express.json());
app.use('/user', userRouter);
app.use('/wallet', walletRouter);

connect()
  .then(() => {
    console.log('connected to mongod');
    app.listen(PORT, () => {
      console.log(`app is listening on  port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
