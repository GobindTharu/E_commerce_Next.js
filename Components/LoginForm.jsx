"use client";
import { auth } from "@/lib/firebase";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  LinearProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Formik } from "formik";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const LoginForm = () => {
  return (
    <Box className="flex flex-col justify-center items-center min-h-[100vh] ">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-8 shadow-2xl rounded p-4 min-w-[400px] justify-center items-center"
            >
              <Typography
                variant="h5"
                className="flex items-center font-serif  text-gray-600"
              >
                <img src="/logo.png" alt="" className="h-10 w-10" />
                B-MANDU
              </Typography>

              <FormControl fullWidth>
                <TextField label="Email" {...formik.getFieldProps("email")} />
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText className="text-base" error>
                    {formik.errors.email}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  label="Password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText className="text-base" error>
                    {formik.errors.password}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <Stack className="w-full justify-center items-center gap-2">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  submit
                </Button>

                <SignInWithGoogle />

                <Link href={"/forget-password"}>
                  <Button>Forget Password ?</Button>
                </Link>

                <Link
                  className="text-blue-500 hover:text-blue-400"
                  href="/signup"
                >
                  Don't have an Account? Signup
                </Link>
              </Stack>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default LoginForm;

function SignInWithGoogle() {
  const handleLogin = async () => {
    // const [isLoading, setIsLoading] = useState();

    // setIsLoading(true);
    try {
      const user = await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error) {
      toast.error(error?.message);
    }
    // setIsLoading(false);
  };
  return (
    <button
    //   isLoading
    //   isDisabled
      variant="outlined"
      onClick={handleLogin}
      className="py-4"
    >
      Sign In with Google
      <img src="/google.png" className="inline h-5 w-5" />
    </button>
  );
}
