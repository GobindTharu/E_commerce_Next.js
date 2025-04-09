"use client";
import { Button, MenuItem } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <MenuItem className="w-full text-center">
      <Link href="/login" className="w-full">
        <Button variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </Link>
    </MenuItem>
  );
};

import React from "react";

export const LoginButton1 = () => {
  return (
    <Link href="/login" passHref>
      <Button variant="contained" color="primary" endIcon={<PersonIcon />}>
        Login
      </Button>
    </Link>
  );
};
