import mongoose from "mongoose";
const uri = `mongodb+srv://mern:mern%40123@school.xg9dy.mongodb.net/Chaudhary-Hardware?retryWrites=true&w=majority&appName=School`;

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
