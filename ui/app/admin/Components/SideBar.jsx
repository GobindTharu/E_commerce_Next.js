"use client";

import {
  Cat,
  Layers2,
  LayoutDashboard,
  LibraryBig,
  LogOut,
  PackageOpen,
  ShieldCheck,
  ShoppingCart,
  Star,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Logo from "../../Components/sub/Logo";

export default function Sidebar() {
  const router = useRouter();

  const menuList = [
    {
      name: "Dashboard",
      link: "/admin",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      name: "Products",
      link: "/admin/products",
      icon: <PackageOpen className="h-5 w-5" />,
    },
    {
      name: "Categories",
      link: "/admin/categories",
      icon: <Layers2 className="h-5 w-5" />,
    },
    {
      name: "Brands",
      link: "/admin/brands",
      icon: <Cat className="h-5 w-5" />,
    },
    {
      name: "Orders",
      link: "/admin/orders",
      icon: <ShoppingCart className="h-5 w-5" />,
    },
    {
      name: "Customers",
      link: "/admin/customers",
      icon: <User className="h-5 w-5" />,
    },
    {
      name: "Reviews",
      link: "/admin/reviews",
      icon: <Star className="h-5 w-5" />,
    },
    {
      name: "Collections",
      link: "/admin/collections",
      icon: <LibraryBig className="h-5 w-5" />,
    },
    {
      name: "Admins",
      link: "/admin/admins",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];
  return (
    <section className="sticky top-0 flex flex-col gap-10  bg-gradient-to-tr to-[#eff3f4] from-[#def3fd] border-r px-5 py-3 h-screen overflow-hidden w-[280px] z-50">
      <div className="flex justify-start py-4">
        <Logo />
      </div>
      <ul className="flex-1 h-full overflow-y-auto flex flex-col gap-4">
        {menuList?.map((item, key) => {
          return <Tab item={item} key={key} />;
        })}
      </ul>
      <div className="flex justify-center">
        <button
          onClick={async () => {
            try {
              window.localStorage.clear();
              router.replace("/login");
              toast.success("Successfully Logged Out");
            } catch (error) {
              toast.error(error.message);
            }
          }}
          className="flex gap-2 items-center px-3 py-2 hover:bg-indigo-100 rounded-xl w-full justify-center ease-soft-spring duration-400 transition-all"
        >
          <LogOut className="h-5 w-5" /> Logout
        </button>
      </div>
    </section>
  );
}

function Tab({ item }) {
  const pathname = usePathname();
  const isSelected = pathname === item?.link;
  return (
    <Link href={item?.link}>
      <li
        className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold ease-soft-spring transition-all duration-300
        ${
          isSelected
            ? "bg-[#879fff] text-white"
            : " bg-gradient-to-tr to-[#eff3f4] from-[#def3fd] text-black"
        } 
        `}
      >
        {item?.icon} {item?.name}
      </li>
    </Link>
  );
}
