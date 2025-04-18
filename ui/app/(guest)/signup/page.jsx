import React from "react";
import  SignupForm  from "../../Components/guest/SignupForm";

export const metadata = {
  title: "Register",
  description: "This is a Register page.",
};
const Signup = () => {
  return (
    <>
      <SignupForm />
    </>
  );
};

export default Signup;
