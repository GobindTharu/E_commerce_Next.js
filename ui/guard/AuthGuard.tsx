"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const AuthGuard = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);

  useEffect(() => {
    const accessToken = window.localStorage.getItem("accessToken");
    const role = window.localStorage.getItem("role");

    if (!accessToken || !role) {
      setIsAuthenticated(false);
      window.localStorage.clear();
      router.replace("/login");
    }
  }, [router]);

  return <>{isAuthenticated && children}</>;
};

export default AuthGuard;
