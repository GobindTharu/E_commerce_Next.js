import yup from "yup";

export const loginCredentialsSchema = yup.object({
  email: yup.string().email().required().trim().lowercase(),
  password: yup.string().required().trim(),
});

export const signupCredentialSchema = yup.object({
  email: yup
    .string()
    .email("Must be a valid email address.")
    .required("Email is required.")
    .trim()
    .lowercase()
    .max(100, "Email must not exceed 100 characters."),

  password: yup
    .string()
    .required("Password is required.")
    .trim()
    .min(8, "Password must be at least 8 characters long.")
    .max(30, "Password must not exceed 30 characters."),

  confirmPassword: yup
    .string()
    .required("Password is required.")
    .trim()
    .min(8, "Password must be at least 8 characters long.")
    .max(30, "Password must not exceed 30 characters."),

  firstName: yup
    .string()
    .required("First name is required.")
    .trim()
    .max(100, "First name must not exceed 100 characters."),

  lastName: yup
    .string()
    .required("Last name is required.")
    .trim()
    .max(100, "Last name must not exceed 100 characters."),

  gender: yup
    .string()
    .required("Gender is required.")
    .trim()
    .oneOf(["male", "female", "other"], "Invalid gender selection."),

  role: yup
    .string()
    .required("Role is required.")
    .trim()
    .oneOf(["admin", "user"], "Invalid role selection."),

  address: yup
    .string()
    .required("Address is required.")
    .trim()
    .max(255, "Address must not exceed 255 characters."),

  age: yup
    .number()
    .required("Age is required.")
    .positive("Age must be a positive number.")
    .integer("Age must be a whole number."),

  phoneNumber: yup
    .string()
    .required("Phone number is required.")
    .matches(/^[0-9]+$/, "Phone number must contain only digits.")
    .min(7, "Phone number must be at least 7 digits.")
    .max(15, "Phone number must not exceed 15 digits."),
});
