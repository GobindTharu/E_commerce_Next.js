"use client";

import React from "react";
import Sidebar from "./Components/SideBar";
import Header from "./Components/Header";

export default function Layout({ children }) {
  return (
    <main className="flex">
      <div className="hidden md:block">

      <Sidebar />
      </div>
      <section className="flex-1">
        <Header />
        <section className="flex-1 min-h-screen">

        {children}
        </section>
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
