"use client"
import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" p-8 bg-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-4">Contact Info</h2>
          <p className="mb-2">123 Street Name, City, Country</p>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p className="mb-6">Email: contact@company.com</p>

          <h3 className="text-lg font-semibold mb-2">Follow Us On</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-gray-400 transition duration-200" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-gray-400 transition duration-200" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-gray-400 transition duration-200" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-gray-400 transition duration-200" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {["Home", "About Us", "Services", "Blog", "Contact"].map((link, index) => (
              <li key={index}>
                <Link
                  href={`/${link.toLowerCase().replace(" ", "-")}`}
                  className="flex items-center text-gray-300 hover:text-white transition duration-200"
                >
                  <span className="mr-2">&gt;</span> {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Map */}
        <div>
          <h2 className="text-lg font-bold mb-4">Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2760098393087!2d-122.40641768467724!3d37.77928067975815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808df3acbfb5%3A0xdfb79f45f0a80b9c!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1617318449043!5m2!1sen!2sus"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>

      {/* Bottom Section */}
      <hr className="my-6 border-gray-600" />
      <p className="text-center text-gray-400">&copy; 2024 Your Company Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
