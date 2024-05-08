import { ErrorWithStatus } from '../exceptions/error-with-status.exception.js';
import User from '../model/schema/user.schema.js';

export const getAllUsers = (req, res) => {
  try {
    return User.find();
  } catch (error) {
    throw new ErrorWithStatus(error.message, 500);
  }
};
