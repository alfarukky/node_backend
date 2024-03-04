import express, { json } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

//middleware
app.use(express.json());
mongoose
  .connect(MONGODB_URI, {})
  .then(() => console.log('connected to mongodb'))
  .catch((err) => console.log('could not connect to mongodb', err));

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = mongoose.model('User', userSchema);

app.get('/user', async (req, res) => {
  const getUsers = await User.find();
  res.json(getUsers);
});

app.post('/user', async (req, res) => {
  const user = new User({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    password: 'password',
  });
  const savedUser = await user.save();
  res.json(savedUser);
});

app.delete('/user/:userId', async (req, res) => {
  const { userId } = req.params;
  const deleteUser = await User.deleteOne({
    _id: userId,
  });
  res.json({
    message: 'user deleted',
    deleteUser,
  });
});

app.patch('/user/:userId', async (req, res) => {
  const { userId } = req.params;
  const { firstName, lastName } = req.body;
  if (!firstName || !lastName) {
    res.status(400).json({ message: 'firstName or lastName is required' });
  }
  const payload = {};
  if (firstName) {
    payload.firstName = firstName;
  }
  if (lastName) {
    payload.lastName = lastName;
  }
  const updatedUser = await User.findOneAndUpdate(
    { _id: userId },
    {
      $set: payload,
    },
    { new: true }
  );
  if (!updatedUser) {
    return res.status(400).json({ message: 'User not found' });
  }
  res.json({ message: 'User Updated', user: updatedUser });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
