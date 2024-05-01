import mongoose from "mongoose";

const url: string = process.env.MONGO_URI_LOCAL as string;
async function dbConnect() {
  try {
    const res = await mongoose.connect(url);

    console.log(`connected`);
  } catch (error) {
    console.error(error);
  }
}

export default dbConnect;
