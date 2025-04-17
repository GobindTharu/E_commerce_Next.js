"use client";
import { MenuItem } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Button } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LoggedOut } from "../guest/Logout";



export const LoginButton = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const accessToken = window.localStorage.getItem("accessToken");
    setIsAuthenticated(!!accessToken);
  }, []);

  return (
    <>
      {!isAuthenticated && <LoggedOut />}
    </>
  );
};


export const LoginButton1 = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const accessToken = window.localStorage.getItem("accessToken");
    setIsAuthenticated(!!accessToken);
  }, []);

  if (isAuthenticated) return null;

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
