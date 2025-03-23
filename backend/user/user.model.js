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
  dob: {
    type: Date,
    max: Date.now(),
  },
  gender: {
    type: String,
    required: true,
    trim: true,
    enum: ["male", "female", "other"],
  },
  role: {
    type: String,
    required: true,
    trim: true,
    enum: ["seller", "buyer"],
  },
  address: {
    type: String,
    required: true,
    trim: true,
    maxlength: 255,
  },
});

const UserTable = new mongoose.model("User", userSchema);

export default UserTable;
