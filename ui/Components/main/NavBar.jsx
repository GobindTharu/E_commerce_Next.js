"use client";
import { useState } from "react";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";

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
    { name: "About Us", link: "/about-us" },
    { name: "Services", link: "/services" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md  border-b py-3 px-4 sm:px-6 md:px-16 flex justify-between items-center z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center text-xl font-serif">
        <img src="/logo.png" alt="B-MANDU Logo" className="h-12 w-12 md:h-16 md:w-16" />
        <span className="ml-2 font-bold">B-MANDU</span>
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-6">
        {menuList.map(({ name, link }) => (
          <Link key={link} href={link} passHref>
            <Button color="inherit">{name}</Button>
          </Link>
        ))}
      </div>
      
      {/* Desktop Login Button */}
      <div className="hidden lg:flex">
        <Link href="/login" passHref>
          <Button variant="contained" color="primary" endIcon={<PersonIcon />}>Login</Button>
        </Link>
      </div>
      
      {/* Mobile Menu */}
      <div className="lg:hidden">
        <IconButton onClick={handleMenuOpen} color="inherit">
          <MenuIcon fontSize="large" />
        </IconButton>
        <Menu 
          anchorEl={anchorEl} 
          open={open} 
          onClose={handleMenuClose} 
          className="lg:hidden"
          MenuListProps={{
            onClick: handleMenuClose,
            className: "w-full flex flex-col items-center"
          }}
        >
          {menuList.map(({ name, link }) => (
            <MenuItem key={link} className="w-full text-center">
              <Link href={link} className="w-full block px-4 py-2">{name}</Link>
            </MenuItem>
          ))}
          <MenuItem className="w-full text-center">
            <Link href="/login" className="w-full">
              <Button variant="contained" color="primary" fullWidth>Login</Button>
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </nav>
  );
};
