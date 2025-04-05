import React from "react";

const LoginButton = () => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return (
      <MenuItem className="w-full text-center">
        <Link href="/login" className="w-full">
          <Button variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </Link>
      </MenuItem>
    );
  } else {
    return (<></>);
  }
};

export default LoginButton;
