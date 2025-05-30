"use client";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axiosInstance from "../../../libs/axiosInstance";

export const LoginForm = () => {
  const router = useRouter();
  const { mutate } = useMutation({
    mutationKey: ["login-user"],
    mutationFn: async (values) => {
      return await axiosInstance.post("/user/login", values);
    },

    onSuccess: (res) => {
      const accessToken = res.data.accessToken;
      const firstName = res.data.userDetails.firstName;
      const role = res.data.userDetails.role;

      window.localStorage.setItem("accessToken", accessToken);
      window.localStorage.setItem("firstName", firstName);
      window.localStorage.setItem("role", role);
      router.push("/");
      toast.success("login successful");
    },
    onError: (error) => {
      toast.error("Invalid Credential");
    },
  });
  return (
    <Box className="flex flex-col justify-center items-center min-h-[100vh]">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-8 shadow-2xl rounded p-4 min-w-[400px] justify-center items-center"
          >
            <Typography
              variant="h5"
              className="flex items-center font-serif text-gray-600"
            >
              <img src="/logo.png" alt="logo" className="h-10 w-10" />
              B-MANDU
            </Typography>

            <FormControl fullWidth>
              <TextField label="Email" {...formik.getFieldProps("email")} />
              {formik.touched.email && formik.errors.email && (
                <FormHelperText className="text-base" error>
                  {formik.errors.email}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth>
              <TextField
                label="Password"
                type="password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <FormHelperText className="text-base" error>
                  {formik.errors.password}
                </FormHelperText>
              )}
            </FormControl>

            <Stack className="w-full justify-center items-center gap-2">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Submit
              </Button>

              <Button variant="outlined" className="py-2 w-full my-4">
                Sign In with Google
                <img src="/google.png" className="inline h-5 w-5 ml-2" />
              </Button>

              <Link href="/forget-password">
                <Button>Forgot Password?</Button>
              </Link>

              <Link
                className="text-blue-500 hover:text-blue-400"
                href="/signup"
              >
                Don't have an Account? Signup
              </Link>
            </Stack>
          </form>
        )}
      </Formik>
    </Box>
  );
};
