import * as yup from "yup";

export const categoryValidationSchema = yup.object().shape({
  imgUrl: yup
    .string()
    .url("Invalid image URL")
    .required("Image URL is required"),

  name: yup
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long")
    .required("Name is required"),

  url: yup
    .string()
    .trim()
    .required("URL is required"),
});
