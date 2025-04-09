"use client";
import PersonIcon from "@mui/icons-material/Person";
import { Button, MenuItem } from "@mui/material";
import Link from "next/link";


export const LoginButton = () => {
  const token = window.localStorage.getItem("accessToken");
  console.log(token);

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
    return <></>;
  }
};

export const LoginButton1 = () => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return (
      <Link href="/login" passHref>
        <Button variant="contained" color="primary" endIcon={<PersonIcon />}>
          Login
        </Button>
      </Link>
    );
  } else {
    return <></>;
  }
};
