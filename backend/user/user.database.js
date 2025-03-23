import mongoose from "mongoose";

const dbName = "mini-amazon";
const dbUserName = "mern";
const dbPassword = encodeURIComponent("mern@123");   // understand special characters @,$
const dbHost = "school.xg9dy.mongodb.net";
const dbOptions = "retryWrites=true&w=majority&appName=School";
const url = `mongodb+srv://${dbUserName}:${dbPassword}@${dbHost}/${dbName}?${dbOptions}`;

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("DB connection established...");
  } catch (error) {
    console.log("DB connection failed...");
    console.log(error.message);
  }
};

export default connectDB;
