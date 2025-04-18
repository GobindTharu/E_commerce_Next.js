"use client";

import { DropdownItem } from "@nextui-org/react";
import { LogOut } from "lucide-react";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";

export const Logout = () => {
  const router = useRouter();

  const handleLogout = () => {
    window.localStorage.clear();
    router.replace("/login");
    toast.success("Logout Successful");
  };
  return (
    <>
      <button
        onClick={handleLogout}
        className="h-8 w-32 flex justify-center gap-3 items-center rounded-xl hover:bg-gray-50 ease-soft-spring duration-400 transition-all"
      >
        <LogOut size={16} /> Log Out
      </button>
    </>
  );
};
