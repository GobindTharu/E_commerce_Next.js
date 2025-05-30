import yup from "yup";

export const productSchema = yup.object({
  name: yup.string().required().trim().max(255),
  brand: yup.string().required("Brand is required.").trim().max(255),
  price: yup.number().min(0, "Price should be positive number.").required(),
  category: yup
    .string()
    .required()
    .trim()
    .oneOf([
      "grocery",
      "clothing",
      "kids",
      "stationery",
      "kitchen",
      "furniture",
      "electronics",
      "electrical",
      "sports",
    ]),
  quantity: yup.number().min(1).integer().required(),
  freeShipping: yup.boolean().notRequired().default(false),
  featured: yup.boolean().notRequired().default(false),
  description: yup.string().required().trim().min(10).max(1000),
});
