import { Menu } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <section className="flex items-center gap-4 bg-white border-b p-4  bg-gradient-to-tr to-[#eff3f4] from-[#def3fd]">
      <button className="flex md:hidden justify-center items-center">
        <Menu/>

      </button>
      <h1 className="text-xl font-semibold">
        Dashboard
        </h1>
    </section>
  );
};

export default Header;
