"use client"
import { useState } from "react";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import React from "react";

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuList = [
    { name: "Home", link: "/" },
    { name: "About-us", link: "/about-us" },
    { name: "Services", link: "/services" },
    { name: "Contact-us", link: "/contact-us" },
  ];

  return (
    <nav className="h-[60px] w-full fixed py-2 px-4 sm:px-6 md:px-16 border-b flex justify-between items-center bg-white z-50">
      <h1 className="flex items-center font-serif text-[24px] sm:text-[30px] md:text-[40px]">
        <img src="/logo.png" alt="logo" className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16" />
        B-MANDU
      </h1>
      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-6">
        {menuList.map((item) => (
          <Link key={item.link} href={item.link}>
            <Button>{item.name}</Button>
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex items-center">
        <Link href="/login">
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Link>
      </div>
      {/* Mobile Menu */}
      <div className="lg:hidden flex items-center">
        <IconButton onClick={handleMenuOpen}>
          <MenuIcon fontSize="large" />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
          {menuList.map((item) => (
            <MenuItem key={item.link} onClick={handleMenuClose}>
              <Link href={item.link}>{item.name}</Link>
            </MenuItem>
          ))}
          <MenuItem onClick={handleMenuClose}>
            <Link href="/login">
              <Button variant="contained" color="primary" fullWidth>
                Login
              </Button>
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </nav>
  );
};
