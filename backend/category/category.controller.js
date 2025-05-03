import express from "express";
import validateReqBody from "../middleware/validate.req.body.middleware..js";
import CategoryTable from "./category.model.js";
import { categoryValidationSchema } from "./category.validation.js";

const router = express.Router();

router.post(
  "/category/create",
  validateReqBody(categoryValidationSchema),
  async (req, res) => {
    // extract new product from req.body
    const newCategory = req.body;

    // get seller id
    const adminId = req.loggedInUserId;

    // create category
    const Category = await CategoryTable.create({ ...newCategory, adminId });

    // send response
    return res.status(201).send({ message: "Category is added successfully." }, Category);
  }
);

export { router as categoryController };
