import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.10");
    console.log("MongoDB connected");
  } catch (err) {
    console.error(" MongoDB connection failed:", err);
    process.exit(1); 
  }
};
