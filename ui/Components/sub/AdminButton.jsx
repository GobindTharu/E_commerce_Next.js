"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminButton() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const accessToken = window.localStorage.getItem("accessToken");
    const role = window.localStorage.getItem("role");
    setIsAuthenticated(accessToken && role === "admin");
  }, []);

  if (!isAuthenticated) return null;

  return (
    <Link href={"/admin"}>
      <button className="text-xs font-semibold">Admin</button>
    </Link>
  );
}
