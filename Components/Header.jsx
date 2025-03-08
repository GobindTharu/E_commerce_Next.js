import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

export const Header = () => {
  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About-us",
      link: "/about-us",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Contact-us",
      link: "/contact-us",
    },
  ];
  return (
    <nav className="h-[60px] w-[100%] fixed py-2 px-16 border-b flex justify-between">
      <h1 className="flex items-center font-serif text-[40px] ">
      <img src="/logo.png" alt="" className="h-16 w-16" />
        B-MANDU</h1>
      <div className="flex items-center gap-6">
        {menuList?.map((item) => {
          return (
            <Link href={item?.link}>
              <Button>{item?.name}</Button>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center">
        <Link href={"/login"}>
        <Button variant="contained" color="primary" sx={{
            
        }} >login</Button>
        </Link>
      </div>
    </nav>
  );
};
