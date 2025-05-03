"use client";

import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./SideBar";
import Header from "./Header";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    toggleSidebar();
  }, [pathname]);

  useEffect(() => {
    function handleClickOutSideEvent(event) {
      if (sidebarRef.current && !sidebarRef?.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutSideEvent);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSideEvent);
    };
  }, []);
  return (
    <main className="relative flex">
      {/* Desktop size */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile Size */}
      <div
        ref={sidebarRef}
        className={`fixed md:hidden ease-in-out duration-500 z-1000 transition-all
        ${isOpen ? "translate-x-0" : "-translate-x-[280px]"}
      `}
      >
        <Sidebar />
      </div>
      <section className="flex-1">
        <Header toggleSidebar={toggleSidebar} />
        <section className="flex-1 min-h-screen">{children}</section>
      </section>
    </main>
  );
}
