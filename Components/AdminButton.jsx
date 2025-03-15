"use client";

import { useAuth } from "@/contexts111/AuthContext";
import { useAdmin } from "@/lib1111/firestore1111111/admins/read";
import Link from "next/link";

export default function AdminButton() {
  const { user } = useAuth();
  const { data } = useAdmin({ email: user?.email });
  if (!data) {
    return <></>;
  }
  return (
    <Link href={"/admin"}>
      <button className="text-xs font-semibold">Admin</button>
    </Link>
  );
}
