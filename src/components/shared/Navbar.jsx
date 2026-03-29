"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Epilogue } from "next/font/google";
import Image from "next/image";
import logo from "../../app/images/logos/Logo.png";
import menu from "../../app/images/icons/hamburger.png";
const epilogue = Epilogue({ subsets: ["latin"] });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${epilogue.className} w-full bg-[#F8F9FA] border-b border-gray-100 sticky top-0 z-50`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left Side: Logo & Navigation Links */}
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image src={logo} alt="logo" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/find-jobs"
              className="text-[#7C8493] font-medium hover:text-[#4640DE] transition-colors"
            >
              Find Jobs
            </Link>
            <Link
              href="/browse-companies"
              className="text-[#7C8493] font-medium hover:text-[#4640DE] transition-colors"
            >
              Browse Companies
            </Link>
          </div>
        </div>

        {/* Right Side: Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="px-6 py-2.5 text-[#4640DE] font-bold hover:bg-[#4640DE]/5 rounded-sm transition-all"
          >
            Login
          </Link>
          <div className="w-[1px] h-6 bg-gray-200 mx-2" />
          <Link
            href="/signup"
            className="px-6 py-2.5 bg-[#4640DE] text-white font-bold rounded-sm hover:bg-[#3b36c0] transition-all shadow-lg shadow-indigo-100"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isOpen ?
            <X size={28} />
          : <Image src={menu} alt="menu" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out border-b border-gray-100 bg-white ${
          isOpen ?
            "max-h-96 opacity-100 py-6"
          : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-6 flex flex-col gap-6">
          <Link
            href="/find-jobs"
            className="text-lg font-semibold text-gray-700"
          >
            Find Jobs
          </Link>
          <Link
            href="/browse-companies"
            className="text-lg font-semibold text-gray-700"
          >
            Browse Companies
          </Link>
          <hr className="border-gray-100" />
          <div className="flex flex-col gap-3">
            <Link
              href="/login"
              className="w-full py-3 text-center text-[#4640DE] font-bold border border-[#4640DE] rounded-sm"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="w-full py-3 text-center bg-[#4640DE] text-white font-bold rounded-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
