"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AuthGuard = ({ children }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const accessToken = window.localStorage.getItem("accessToken");
    const role = window.localStorage.getItem("role");

    if (!accessToken || role !== "admin") {
      setIsAuthenticated(false);
      router.replace("/");
      toast.error("You are not Authorized")
    }
  }, [router]);

  return <>{isAuthenticated && children}</>;
};

export default AuthGuard;
