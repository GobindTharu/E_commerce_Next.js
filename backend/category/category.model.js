import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    imgUrl: {
      type: String,
      required: true,
    },
    name:{
        type: String,
        trim:true,
        required: true,
    },
    url:{
        type: String,
        trim:true,
        required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CategoryTable = mongoose.model("Category", categorySchema);

export default CategoryTable;
