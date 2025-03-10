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
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";
import Link from "next/link";
import toast from "react-hot-toast";
import * as Yup from "yup";

export const SignupForm = () => {
  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      toast.success("Successfully signed up with Google");
    } catch (error) {
      toast.error(error?.message || "Failed to sign up with Google");
    }
  };

  return (
    <Box className="flex flex-col justify-center items-center m-3 min-h-screen px-4 sm:px-6 lg:px-8">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          age: "",
          gender: "",
          role: "",
          dob: "",
          address: "",
          description: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Required"),
          lastName: Yup.string().required("Required"),
          age: Yup.number().positive("Age must be positive").integer("Age must be an integer").required("Required"),
          gender: Yup.string().required("Required"),
          role: Yup.string().oneOf(["User", "Admin"], "Invalid role").required("Required"),
          dob: Yup.date().required("Required"),
          address: Yup.string().required("Required"),
          description: Yup.string().required("Required"),
          email: Yup.string().email("Invalid email").required("Required"),
          password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
          confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await createUserWithEmailAndPassword(auth, values.email, values.password);
            toast.success("Successfully registered");
          } catch (error) {
            toast.error(error?.message || "Registration failed");
          }
          setSubmitting(false);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 shadow-2xl rounded-lg p-6 w-full max-w-lg bg-white">
            <Typography variant="h5" className="flex items-center font-serif text-gray-600 text-center">
              <img src="/logo.png" alt="logo" className="h-10 w-10 mr-2" />
              B-MANDU
            </Typography>

            {[
              { name: "firstName", label: "First Name" },
              { name: "lastName", label: "Last Name" },
              { name: "age", label: "Age", type: "number" },
              { name: "dob", label: "Date of Birth", type: "date" },
              { name: "address", label: "Address" },
              { name: "description", label: "Description", multiline: true, rows: 3 },
              { name: "email", label: "Email" },
              { name: "password", label: "Password", type: "password" },
              { name: "confirmPassword", label: "Confirm Password", type: "password" },
            ].map(({ name, label, type, multiline, rows }) => (
              <FormControl fullWidth key={name}>
                <TextField label={label} type={type} multiline={multiline} rows={rows} {...formik.getFieldProps(name)} />
                {formik.touched[name] && formik.errors[name] && (
                  <FormHelperText className="text-base" error>
                    {formik.errors[name]}
                  </FormHelperText>
                )}
              </FormControl>
            ))}

            {["gender", "role"].map((field) => (
              <FormControl fullWidth key={field}>
                <InputLabel>{field.charAt(0).toUpperCase() + field.slice(1)}</InputLabel>
                <Select {...formik.getFieldProps(field)}>
                  {field === "gender"
                    ? ["Male", "Female", "Other"].map((option) => <MenuItem key={option} value={option}>{option}</MenuItem>)
                    : ["User", "Admin"].map((option) => <MenuItem key={option} value={option}>{option}</MenuItem>)}
                </Select>
              </FormControl>
            ))}

            <Stack className="w-full justify-center items-center gap-3">
              <Button type="submit" fullWidth variant="contained" color="primary">
                Register
              </Button>

              <Button variant="outlined" onClick={handleGoogleSignup} className="py-2 w-full">
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
