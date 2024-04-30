import { randomBytes } from "crypto";
import mongoose from "mongoose";



const url:string=process.env.DATABASE_URL as string
async function dbConnect() {

 try {
  const res=await mongoose.connect(url);
  const secret= randomBytes(32).toString('hex')
  console.log(secret);
  
  console.log(`connected`);
  
 } catch (error) {
  console.error(error)
 }

}

export default dbConnect;