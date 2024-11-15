"use client";
import React, { useState } from "react";
import { base_url } from "../api/base_url";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUsPage() {
  // State for form data
  const [formData, setFormData] = useState({
    collor_name: "",
    email: "",
    phone: "",
    subject: "",
    collor_des: "",
  });

  // State for loading and error handling
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.collor_name || !formData.email || !formData.phone || !formData.subject || !formData.collor_des) {
      setError("All fields are required.");
      toast.error("All fields are required.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Send POST request to /contact-form
      const response = await fetch(base_url + "/contact_form?product_id=32434", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Handle success response
        toast.success("Form submitted successfully!");
      } else {
        // Handle error response
        toast.error(result.message || "Something went wrong.");
        setError(result.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-screen-xl shadow mx-auto p-8">
      {/* Page Heading */}
      <h1 className="text-4xl text-red-600 text-center mb-20">
        We work from Saturday till Thursday from 8:00 a.m. to 5:00 p.m.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Address */}
        <div className="flex flex-col items-start">
          <img src="/logo.png" alt="Company Logo" className="mb-4" />
          <p className="text-gray-700 mb-2 text-lg font-semibold">Our Company</p>
          <p className="text-gray-700 mb-2">Company Name: XYZ Ltd.</p>
          <p className="text-gray-700 mb-2">Street Address: 123 Example Street</p>
          <p className="text-gray-700 mb-2">City: Sample City</p>
          <p className="text-gray-700 mb-2">Country: Exampleland</p>
          <p className="text-gray-700 mb-2">Phone: (123) 456-7890</p>
          <p className="text-gray-700 mb-2">Email: info@company.com</p>
          <p className="text-gray-700">Working Hours: Saturday to Thursday, 8:00 AM - 5:00 PM</p>
        </div>

        {/* Right Side: Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {/* Name and Phone in a Row */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label htmlFor="collor_name" className="text-gray-700 mb-1">Name</label>
              <input
                id="collor_name"
                name="collor_name"
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={formData.collor_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="phone" className="text-gray-700 mb-1">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="w-full">
            <label htmlFor="email" className="text-gray-700 mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Subject Input */}
          <div className="w-full">
            <label htmlFor="subject" className="text-gray-700 mb-1">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message Input */}
          <div className="w-full">
            <label htmlFor="collor_des" className="text-gray-700 mb-1">Message</label>
            <textarea
              id="collor_des"
              name="collor_des"
              placeholder="Message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.collor_des}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-center">{error}</p>}

          {/* Send Button */}
          <button
            type="submit"
            className="bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send a Message"}
          </button>
        </form>
      </div>

      {/* Toast container */}
      <toast-container />
    </div>
  );
}
