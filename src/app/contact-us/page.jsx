import React from "react";

export default function ContactUsPage() {
  return (
    <div className="max-w-screen-lg mx-auto p-8">
      
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-red-600 text-center mb-10">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Side: Address */}
        <div className="flex flex-col items-start">
          <div className="text-6xl text-red-600 mb-4">📍</div> {/* Placeholder logo */}
          <h2 className="text-2xl font-semibold mb-4">Our Address</h2>
          <p className="text-gray-700 mb-2">
            1234 Example Street, Example City, Country 12345
          </p>
          <p className="text-gray-700 mb-2">Phone: (123) 456-7890</p>
          <p className="text-gray-700">Email: info@company.com</p>
        </div>
        
        {/* Right Side: Contact Form */}
        <form className="flex flex-col space-y-4">
          
          {/* Name and Phone in a Row */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          
          {/* Subject Input */}
          <input
            type="text"
            placeholder="Subject"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          
          {/* Message Input */}
          <textarea
            placeholder="Message"
            rows="4"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          ></textarea>
          
          {/* Send Button */}
          <button
            type="submit"
            className="bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Send a Message
          </button>
        </form>
      </div>
    </div>
  );
}
