import mongoose from "mongoose";

export const createConnection = (url, options = {}) => {
  return mongoose.connect(
    url,
    {
      ...options,
      useNewUrlParser: true
    }
  );
};
