import mongoose from "mongoose";
import { DB_Name } from "../constants";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI not found");
    }

    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_Name}`
    );

    console.log(
      `MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
