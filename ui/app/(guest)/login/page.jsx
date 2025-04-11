import React from "react";
import { LoginForm } from "/Components/guest/LoginForm";

export const metadata = {
  title: "Login",
  description: "This is a login page.",
};
const Login = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;
