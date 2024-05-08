import mongoose from 'mongoose';

export const connect = async () => {
  const { MONGO_URI } = process.env;

  if (MONGO_URI) {
    return await mongoose.connect(MONGO_URI);
  }
};
