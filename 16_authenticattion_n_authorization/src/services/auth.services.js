import User from '../model/schema/user.schema.js';
import Jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { ErrorWithStatus } from '../exceptions/error-with-status.exception.js';
export const login = async (email, password) => {
  //check if email exists
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found', 404);
  }
  //check if password is correct
  if (!(await bcrypt.compare(password, user.password))) {
    throw new ErrorWithStatus('Username or Password is incorrect', 400);
  }
  //Generate acess token
  //const token = Buffer.from(`${user.email}: ${user.password}`).toString('base64');
  const JWT_SECRET = process.env.JWT_SECRET || 'secret';
  const token = Jwt.sign(
    { role: user.role || 'USER', email: user.email, sub: user._id },
    JWT_SECRET,
    {
      expiresIn: '5m',
    }
  );
  return {
    message: 'Login sucessful',
    data: {
      acessToken: token,
    },
  };
};
export const register = async (name, email, password, role) => {
  //check if email exists
  const user = await User.findOne({ email });
  if (user) {
    throw new ErrorWithStatus('User already exists', 400);
  }

  //Create new user
  password = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password,
  });
  await newUser.save();
  delete newUser.password;
  return {
    message: 'User created successfully',
    data: {
      user: newUser,
    },
  };
};
