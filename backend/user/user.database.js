import mongoose from "mongoose";
import dotenv from "dotenv"; // Import dotenv using ES Modules syntax
dotenv.config(); // Load the environment variables

const uri = process.env.MONGODB_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("DB connection established...");
  } catch (error) {
    console.log("DB connection failed...");
    console.log(error.message);
  }
};

export default connectDB;
