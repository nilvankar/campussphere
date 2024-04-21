
import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/campussphere");
    console.log(`connected to mongodb`);
    
  } catch (error) {
    throw new Error("connection failed failed!");
  }
};

export default connectDb;