"use client";

import {
    DropdownItem
} from "@nextui-org/react";
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
      <button
        onClick={handleLogout}
        className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-50"
      >
        <LogOut size={14} />
        <DropdownItem key="logout">Log Out</DropdownItem>
      </button>
    );
  };
  