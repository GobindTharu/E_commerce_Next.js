import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    maxlength: 255,
    lowercase: true,
    unique: true, //index
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  confirmPassword: {
    type: String,
    required: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 255,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 255,
  },
  age: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    enum: ["male", "female", "other"],
  },
  role: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    enum: ["user", "admin"],
  },
  address: {
    type: String,
    required: true,
    trim: true,
    maxlength: 255,
  },
  description:{
    type: String,
    required: true,
    trim: true,
    maxlength: 225,
  }
});

const UserTable = new mongoose.model("User", userSchema);

export default UserTable;
