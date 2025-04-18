import { Heart, Search, ShoppingCart, UserCircle2 } from "lucide-react";
import Link from "next/link";
import HeaderClientButtons from "../sub/HeaderClientButton";
import AdminButton from "../sub/AdminButton";
import ProfileButton from "../guest/ProfileButton";
import SearchBar from "../sub/Search";

export default function SubHeader() {
  return (
    <nav className="sticky top-12 md:top-16 w-full z-100  bg-opacity-0 backdrop-blur-2xl py-3 px-4 md:py-4 md:px-16 bg-gray-200 flex items-center justify-between">
      <Link href={"/"}></Link>

      <div className="flex items-center gap-1">
      <SearchBar />

        <AdminButton />
        <HeaderClientButtons />
        <ProfileButton />
      </div>
    </nav>
  );
}
