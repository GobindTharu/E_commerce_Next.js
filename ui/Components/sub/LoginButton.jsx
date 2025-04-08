"use client"
import { Button,  MenuItem } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";



export const LoginButton = () => {
  const token = window.localStorage.getItem("accessToken");

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


import React from "react";

export const LoginButton1 = () => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return (
      <Link href="/login" passHref>
      <Button variant="contained" color="primary" endIcon={<PersonIcon />}>Login</Button>
    </Link>
    );
  } else {
    return (<></>);
  }
};


