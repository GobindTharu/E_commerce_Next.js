"use client";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Stack,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import * as Yup from "yup";

const SignupForm = () => {
  const router = useRouter();

  const { mutate } = useMutation({
    mutationKey: ["signup-user"],
    mutationFn: async (values) => {
      return await axios.post("http://localhost:8002/user/signup/", values);
    },
    onSuccess: (res) => {
      router.push("/login");
      toast.success("Register Successful", res.data);
    },
    onError: (error) => {
      toast.error("Failed to Register");
    },
  });

  return (
    <Box className="flex flex-col justify-center items-center w-full px-12 min-h-[100vh]">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          age: "",
          gender: "",
          role: "",
          phoneNumber: "",
          address: "",
          description: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Required"),
          lastName: Yup.string().required("Required"),
          age: Yup.number()
            .positive("Age must be positive")
            .integer("Age must be an integer")
            .required("Required"),
          gender: Yup.string().required("Required"),
          role: Yup.string()
            .required("Required"),
          phoneNumber: Yup.number()
            .integer("must Be positive")
            .required("Required"),
          address: Yup.string().required("Required"),
          description: Yup.string().required("Required"),
          email: Yup.string().email("Invalid email").required("Required"),
          password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Required"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Required"),
        })}
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-6 shadow-2xl rounded-lg p-6 w-full max-w-lg bg-white"
          >
            <Typography
              variant="h5"
              className="flex items-center font-serif text-gray-600 text-center"
            >
              <img src="/logo.png" alt="logo" className="h-10 w-10 mr-2" />
              B-MANDU
            </Typography>

            {[
              { name: "firstName", label: "First Name" },
              { name: "lastName", label: "Last Name" },
              { name: "address", label: "Address" },
              { name: "age", label: "Age", type: "number" },
              { name: "phoneNumber", label: "Number", type: "number" },
              { name: "email", label: "Email" },
              { name: "password", label: "Password", type: "password" },
              {
                name: "confirmPassword",
                label: "Confirm Password",
                type: "password",
              },
              {
                name: "description",
                label: "Description",
                multiline: true,
                rows: 3,
              },
            ].map(({ name, label, type, multiline, rows }) => (
              <FormControl fullWidth key={name}>
                <TextField
                  label={label}
                  type={type}
                  multiline={multiline}
                  rows={rows}
                  {...formik.getFieldProps(name)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched[name] && Boolean(formik.errors[name])}
                  helperText={formik.touched[name] && formik.errors[name]}
                />
              </FormControl>
            ))}

            {["gender", "role"].map((field) => (
              <FormControl
                fullWidth
                key={field}
                error={formik.touched[field] && Boolean(formik.errors[field])}
              >
                <InputLabel>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </InputLabel>
                <Select
                  value={formik.values[field]}
                  onChange={(e) => formik.setFieldValue(field, e.target.value)}
                  onBlur={formik.handleBlur}
                >
                  {field === "gender"
                    ? ["male", "female", "other"].map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))
                    : ["user", "admin"].map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                </Select>
                {formik.touched[field] && formik.errors[field] && (
                  <FormHelperText>{formik.errors[field]}</FormHelperText>
                )}
              </FormControl>
            ))}

            <Stack className="w-full justify-center items-center gap-3">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Register
              </Button>

              <Button variant="outlined" className="py-3 w-full">
                Sign Up with Google
                <img src="/google.png" className="inline h-5 w-5 ml-2" />
              </Button>

              <Link className="text-blue-500 hover:text-blue-400" href="/login">
                Already have an account? Login
              </Link>
            </Stack>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default SignupForm;
