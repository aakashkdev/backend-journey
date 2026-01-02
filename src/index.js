import dotenv from "dotenv";
import connectDB from "../db";


dotenv.config({
    path : "./env"
})

connectDB();






























/*import mongoose from "mongoose";
import { DB_Name } from "./constants";
import express from "express";

const app = express();

(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGO_URI}/${DB_Name}`)
       app.on("error", (error) => {
           console.error("Error connecting to the server:", error);
       });
       app.listen(process.env.PORT, () => {
           console.log(`Server is running on port ${process.env.PORT}`);
       });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}) ()*/