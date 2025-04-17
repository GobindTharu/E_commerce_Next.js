"use client";

import AuthGuard from "../../guard/AuthGuard";
import AdminLayout from "./Components/AdminLayout";

export default function Layout({ children }) {
  return (
    <AuthGuard>
      <AdminLayout>{children}</AdminLayout>
    </AuthGuard>
  );
}
