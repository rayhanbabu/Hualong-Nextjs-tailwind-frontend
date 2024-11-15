"use client";
import React from "react";

 function About() {
  return (
    <div className=" mx-auto">
      {/* Image with Black Overlay */}
      <div className="relative w-full h-[30vh] bg-cover bg-center" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.jpg?s=2048x2048&w=is&k=20&c=aipF63e5nI-DxreysL9XbP9S_kYbbVeBQAw5d3qzSUs=')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
         <div className="flex-col">
         <h1 className="text-5xl font-bold text-center">About Us</h1>
          <div className="text-center mt-4 text-gray-400">
        <p className="text-white text-xl">Home/ <span>ABOUT US</span></p>
      </div>
         </div>
        </div>
      </div>

      {/* Path Text */}
     

      {/* Bottom Section */}
      <div className="grid max-w-screen-xl mx-auto py-20 grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {/* Left Side: Video */}
        <div className="flex flex-col items-center justify-center">

          <div className="w-full">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Dummy video URL, replace it with your own
              title="About Us Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right Side: Welcome Title and Details */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-semibold mb-4 -mt-16">Welcome to Our Company</h2>
          <p className="text-lg text-gray-700 mb-4">
            We are a passionate team dedicated to delivering exceptional service and products to our customers. Our journey started years ago with a single vision: to make a positive impact in our industry.service and products to our customers. Our journey started years ago with a single vision: to make a positive impact in our industry.service and products to our customers. Our journey started years ago with a single vision: to make a positive impact in our industry.
          </p>
        </div>
      </div>

      {/* At a Glance Section */}
      <div className="mt-16 bg-gray-100 py-16">
        <h2 className="text-4xl text-red-700 text-center mb-12">At a Glance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto gap-8">
          {/* Left Side: List of 10 Things */}
          <div className="space-y-4">
            <ul className="list-disc pl-5 text-xl  text-gray-700">
              <li>We believe in quality and excellence.</li>
              <li>Customer satisfaction is our top priority.</li>
              <li>Innovation is at the heart of everything we do.</li>
              <li>We are committed to sustainability and eco-friendly practices.</li>
              <li>We value collaboration and teamwork.</li>
              <li>Our team is made up of experts in the field.</li>
              <li>We provide personalized services for every client.</li>
              <li>We always aim to exceed expectations.</li>
              <li>Our company culture is built on integrity and respect.</li>
              <li>We are continuously growing and evolving to meet market needs.</li>
            </ul>
          </div>

          {/* Right Side: Dummy Image */}
          <div className="flex justify-center">
            <img src="https://static01.nyt.com/images/2024/07/25/multimedia/00china-travel-explainer-01-tjck/00china-travel-explainer-01-tjck-videoSixteenByNineJumbo1600.jpg" alt="Company Image" className="w-full max-w-md rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;