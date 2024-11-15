"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the mobile menu visibility
  const toggleMenu = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header>
      {/* Top Header */}
      <div className="flex justify-between items-center bg-white p-4 max-w-screen-xl mx-auto">
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
          onClick={toggleMenu}
          className="md:hidden text-gray-700 px-3 py-2 rounded-md focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Menu Bar */}
      <div className="bg-gray-300">
        <nav className="max-w-screen-xl mx-auto">
          {/* Mobile menu toggle */}
          <ul
            className={`flex flex-col sm:flex-row gap-4 p-2 md:p-0 text-xl md:flex-row md:gap-4 ${isDropdownOpen ? 'flex' : 'hidden'} md:flex`}
          >
            <li className="text-gray-700 px-3 py-2 hover:bg-gray-300 rounded-md cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="text-gray-700 px-3 py-2 hover:bg-gray-300 rounded-md cursor-pointer">
              <Link href="/about-us">About us</Link>
            </li>
            <li className="text-gray-700 px-3 py-2 hover:bg-gray-300 rounded-md cursor-pointer">
              <Link href="/hr-compliance">HR compliance</Link>
            </li>
            <li className="text-gray-700 px-3 py-2 hover:bg-gray-300 rounded-md cursor-pointer">
              <Link href="/vision-mission">Vision & Mission</Link>
            </li>
            <li className="text-gray-700 px-3 py-2 hover:bg-gray-300 rounded-md cursor-pointer">
              <Link href="/contact-us">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
