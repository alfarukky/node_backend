import mongoose from 'mongoose';

//Scheme
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },
  role: {
    type: String,
    enum: ['USER', 'ADMIN'],
    default: 'USER',
  },
});

//model
const User = mongoose.model('User', userSchema, undefined, {
  timestamps: true,
});
export default User;
