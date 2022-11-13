import { generateFakeData } from "./../utils/generateFakeData";
import mongoose from "mongoose";

export const connectDbAndCreateFakeData = async (count: number) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!);
    const data = await generateFakeData(count);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`Fake data created:`);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
