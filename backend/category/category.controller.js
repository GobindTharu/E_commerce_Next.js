import express from "express";
import validateReqBody from "../middleware/validate.req.body.middleware..js";
import CategoryTable from "./category.model.js";
import { categoryValidationSchema } from "./category.validation.js";
import { paginationSchema } from "../shared/pagination.schema.js";

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
    res.status(200).json({ message: "Category is added successfully." });
  }
);

router.post(
  "/category/list",
  validateReqBody(paginationSchema),
  async (req, res) => {
    // extract pagination data from req.body
    const paginationData = req.body;

    const page = paginationData.page;
    const limit = paginationData.limit;

    // calculate skip using limit and page
    const skip = (page - 1) * limit;

    const categories = await CategoryTable.aggregate([
      {
        $match: {},
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
      {
        $skip: skip,
      },
      { $limit: limit },
      {
        $project: {
          imgUrl: 1,
          name: 1,
          url: 1,
        },
      },
    ]);
    console.log(categories);
    const totalItems = await CategoryTable.find({
      sellerId: req.loggedInUserId,
    }).countDocuments();
    console.log(totalItems);
    const totalPage = Math.ceil(totalItems / limit);

    return res
      .status(200)
      .send({ message: "success", CategoryList: categories, totalPage });
  }
);

export { router as categoryController };
