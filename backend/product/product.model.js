import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 225,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
      maxlength: 225,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      enum: [
        "grocery",
        "clothing",
        "kids",
        "stationery",
        "kitchen",
        "furniture",
        "electronics",
        "electrical",
        "sports",
      ],
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    image: {
      type: String,
      required: false,
      nullable: true,
    },
    freeShipping: {
      type: Boolean,
      required: false,
      default: false,
    },
    featured: {
      type: Boolean,
      required: false,
      default: false,
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 1000,
    },
    adminId: {
      type: mongoose.isObjectIdOrHexString,
      ref: "",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProductTable = mongoose.model("Product", productSchema);

export default ProductTable;
