"use client";

import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./Components/SideBar";
import Header from "./Components/Header";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
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
        className={`fixed md:hidden ease-in-out duration-500 transition-all
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

// function AdminChecking({ children }) {
//   const router = useRouter();
//   const [isAuthenticated, setIsAuthenticated] = React.useState(true);
//   const [isLoading, setIsLoading] = React.useState(true);

//   useEffect(() => {
//     const accessToken = window.localStorage.getItem("accessToken");
//     const role = window.localStorage.getItem("role");

//     if (!accessToken || !role) {
//       setIsAuthenticated(false);
//       window.localStorage.clear();
//       router.replace("/login");
//     }
//     if (!accessToken || !role) {
//       return (
//         <div className="h-screen w-screen flex justify-center items-center">
//           <h1>Please Login First!</h1>
//         </div>
//       );
//     }
//   }, [router]);

//   if (isLoading) {
//     return (
//       <div className="h-screen w-screen flex justify-center items-center">
//         <CircularProgress />
//       </div>
//     );
//   }

// return <AdminLayout>{isAuthenticated && children}</AdminLayout>;
// }
