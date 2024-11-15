
"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      {/* Top Header */}
      <div className="flex justify-between max-w-screen-xl mx-auto items-center bg-white p-4 shadow-md">
        {/* Logo */}
        <div className="text-xl font-bold"><Link href="/"><Image src="/logo.png" width="200" height="100" alt="logo" /></Link></div>

        {/* Buttons on the Right */}
        <div className="hidden md:flex gap-4">
          <button className="text-gray-700 px-3 py-2 hover:bg-gray-100 border-2 rounded-md">0172656464</button>
          <button className="text-gray-700 px-3 py-2 hover:bg-gray-100  border-2 rounded-md">Button 2</button>
          <button className="text-white px-3 py-2 hover:bg-red-400 bg-red-600 rounded-md"><Link href="/contact-us">Contact Us</Link></button>
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
      <div className="bg-gray-200">
      <nav className={` ${isMenuOpen ? "block" : "hidden"} max-w-screen-xl mx-auto md:flex md:justify-start`}>
        <ul className="flex  flex-col md:flex-row gap-4 p-4 md:p-0">
          <li className="text-gray-700 px-3 py-2 hover:bg-gray-300 rounded-md cursor-pointer">Home</li>
          <li className="text-gray-700 px-3 py-2 hover:bg-gray-300 rounded-md cursor-pointer">About</li>
          
          {/* Dropdown Menu */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-700 px-3 py-2 hover:bg-gray-300 rounded-md cursor-pointer"
            >
              Services
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Service 1</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Service 2</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Service 3</li>
              </ul>
            )}
          </li>

          <li className="text-gray-700 px-3 py-2 hover:bg-gray-300 rounded-md cursor-pointer">Blog</li>
          <li className="text-gray-700 px-3 py-2 hover:bg-gray-300 rounded-md cursor-pointer">Contact</li>
        </ul>
      </nav>
      </div>
    </header>
  );
}

export default Header;
