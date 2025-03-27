"use client";

import Link from "next/link";

export default function AdminButton() {

  // if (!data) {
  //   return <></>;
  // }
  return (
    <Link href={"/admin"}>
      <button className="text-xs font-semibold">Admin</button>
    </Link>
  );
}
