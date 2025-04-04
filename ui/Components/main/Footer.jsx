"use client";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-3 w-full bg-blue-100 border-t p-5 md:p-10">
      <div className="border-b w-full flex flex-col md:flex-row md:justify-between gap-3">
        <div className="flex text-center justify-center items-center">
          <img className="h-8" src="/logo.png" alt="Logo" />
          B-MANDU
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <div className="flex gap-2 items-center">
            <Phone size={12} className="text-blue-500" />
            <h2 className="text-sm text-gray-600">+977-98XXXXXXX</h2>
          </div>
          <div className="flex gap-2 items-center">
            <Mail size={12} className="text-blue-500" />
            <h2 className="text-sm text-gray-600">abc@gmail.com</h2>
          </div>
          <div className="flex gap-2 items-center">
            <MapPin size={12} className="text-blue-500" />
            <h2 className="text-sm text-gray-600">kapilbastu-Nepal</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <h3 className="text-xs text-gray-700">
          &copy; 2025. All rights reserved by // B-MANDU
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
