"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); // Default to "Home" as active

  // Toggle the mobile menu visibility
  const toggleMenu = () => setIsDropdownOpen(!isDropdownOpen);

  // Close the mobile menu
  const closeMenu = () => setIsDropdownOpen(false);

  // Handle setting active link
  const handleSetActive = (link) => {
    setActiveLink(link); // Set the clicked link as active
    closeMenu(); // Close the menu when a link is clicked (for mobile view)
  };

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
            <Link href="/contact-us">Get a Quote</Link>
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
            <li
              className={`text-gray-700 px-3 py-2 rounded-md cursor-pointer transition-all duration-300 
                ${activeLink === '/' ? 'bg-red-700 text-white' : 'hover:bg-red-700 hover:text-white'}`}
            >
              <Link href="/" onClick={() => handleSetActive("/")}>Home</Link>
            </li>
            <li
              className={`text-gray-700 px-3 py-2 rounded-md cursor-pointer transition-all duration-300 
                ${activeLink === '/about-us' ? 'bg-red-700 text-white' : 'hover:bg-red-700 hover:text-white'}`}
            >
              <Link href="/about-us" onClick={() => handleSetActive("/about-us")}>About us</Link>
            </li>
            <li
              className={`text-gray-700 px-3 py-2 rounded-md cursor-pointer transition-all duration-300 
                ${activeLink === '/hr-compliance' ? 'bg-red-700 text-white' : 'hover:bg-red-700 hover:text-white'}`}
            >
              <Link href="/hr-compliance" onClick={() => handleSetActive("/hr-compliance")}>HR compliance</Link>
            </li>
            <li
              className={`text-gray-700 px-3 py-2 rounded-md cursor-pointer transition-all duration-300 
                ${activeLink === '/vision-mission' ? 'bg-red-700 text-white' : 'hover:bg-red-700 hover:text-white'}`}
            >
              <Link href="/vision-mission" onClick={() => handleSetActive("/vision-mission")}>Vision & Mission</Link>
            </li>
            <li
              className={`text-gray-700 px-3 py-2 rounded-md cursor-pointer transition-all duration-300 
                ${activeLink === '/contact-us' ? 'bg-red-700 text-white' : 'hover:bg-red-700 hover:text-white'}`}
            >
              <Link href="/contact-us" onClick={() => handleSetActive("/contact-us")}>Contact</Link>
            </li>
            <li
              className={`text-gray-700 px-3 py-2 rounded-md cursor-pointer transition-all duration-300 
                ${activeLink === '/member' ? 'bg-red-700 text-white' : 'hover:bg-red-700 hover:text-white'}`}
            >
              <Link href="/member" onClick={() => handleSetActive("/member")}>Board of Directors</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
