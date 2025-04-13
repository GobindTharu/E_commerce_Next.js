"use client";

import { CircularProgress } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import AuthGuard from "../../guard/AuthGuard";

export default function Layout({ children }) {
  return (
    <AuthGuard>
      <AdminChecking>{children}</AdminChecking>
    </AuthGuard>
  );
}

function AdminChecking({ children }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const accessToken = window.localStorage.getItem("accessToken");
    const role = window.localStorage.getItem("role");

    if (!accessToken || !role) {
      setIsAuthenticated(false);
      window.localStorage.clear();
      router.replace("/login");
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  }

  if (!accessToken || !role) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <h1>Please Login First!</h1>
      </div>
    );
  }

  return <AdminLayout>{isAuthenticated && children}</AdminLayout>;
}
