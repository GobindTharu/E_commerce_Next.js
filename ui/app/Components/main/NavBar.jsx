"use client"
import { useState } from "react";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { LoginButton, LoginButton1 } from "../sub/LoginButton";
import Logo from "../sub/Logo";

const NavBar = () => {
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
    <nav className="sticky top-0 left-0 w-full backdrop-blur-md  exit bg-gray-300 py-0 md:py-2  px-4 sm:px-6 md:px-16 flex justify-between items-center z-50">
      {/* Logo */}
      <Logo />

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-6 px-2 md:px-16 ">
        {menuList.map(({ name, link }) => (
          <Link
            key={link}
            href={link}
            passHref
            className="px-2 hover:rounded-full transition delay-3p0 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-100"
          >
            <Button sx={{ borderRadius: "100px" }}>{name}</Button>
          </Link>
        ))}
      </div>

      {/* Desktop Login Button */}
      <div className="hidden lg:flex items-center justify-center gap-2">

        <LoginButton />
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
            className: "w-full flex flex-col items-center",
          }}
        >
          {menuList.map(({ name, link }) => (
            <MenuItem key={link} className="w-full text-center">
              <Link href={link} className="w-full block px-4 py-2">
                {name}
              </Link>
            </MenuItem>
          ))}

          <LoginButton1 />
        </Menu>
      </div>
    </nav>
  );
};

export default NavBar;
