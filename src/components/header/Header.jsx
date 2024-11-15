"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility when hovered
  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  return (
    <header>
      {/* Top Header */}
      <div className="flex justify-between max-w-screen-xl mx-auto items-center bg-white p-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">
            <Image src="/logo.png" width="250" height="100" alt="logo" />
          </Link>
        </div>

        {/* Buttons on the Right */}
        <div className="hidden md:flex gap-4">
          <button className="text-gray-700 text-xl px-3 py-2 hover:bg-gray-500 hover:text-white border-2 rounded-md flex items-center gap-2">
            <FaPhoneAlt />
            <p>0172656464</p>
          </button>
          <button className="text-gray-700 text-xl px-3 py-2 hover:bg-gray-500 hover:text-white border-2 rounded-md flex items-center gap-2">
            <MdEmail />
            <p>abcd@gmail.com</p>
          </button>
          <button className="text-white px-3 py-2 hover:bg-red-800 bg-red-700 rounded-md">
            <Link href="/contact-us">Contact Us</Link>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="md:hidden text-gray-700 px-3 py-2 rounded-md focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Menu Bar */}
      <div className="bg-gray-300">
        <nav className="max-w-screen-xl mx-auto md:flex md:justify-start">
          <ul className="flex flex-col md:flex-row gap-4 p-2 md:p-0 text-xl">
            <li className="text-gray-700 px-3 py-2 hover:bg-gray-300 rounded-md cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="text-gray-700 px-3 py-2 hover:bg-gray-300 rounded-md cursor-pointer">
              <Link href="/about-us">About us</Link>
            </li>

            {/* Dropdown Menu */}
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-700 px-3 py-2 hover:bg-gray-300 rounded-md cursor-pointer">
                Products <AiFillCaretDown className="ml-2" />
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-10 p-1">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link href="/products/male">Male</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link href="/products/female">Female</Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="text-gray-700 px-3 py-2 hover:bg-gray-300 rounded-md cursor-pointer">
              <Link href="/hr-compliance">HR compliance</Link>
            </li>
            <li className="text-gray-700 px-3 py-2 hover:bg-gray-300 rounded-md cursor-pointer">
              <Link href="/vision-mission">Vision & Mission</Link>
            </li>
            <li className="text-gray-700 px-3 py-2 hover:bg-gray-300 rounded-md cursor-pointer">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
