import React from "react";

function AboutUs() {
  return (
    <div className="max-w-screen-lg py-16 mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Side - Demo Video */}
        <div className="w-full md:w-1/2">
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4" // Sample video URL
            controls
            className="w-full h-auto rounded-lg shadow-md"
          ></video>
        </div>

        {/* Right Side - About Us Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-700 mb-6">
            We are a dedicated team passionate about delivering high-quality solutions that make a difference.
            Our commitment to innovation and excellence is what drives us to succeed. From concept to execution,
            we strive to exceed expectations and create meaningful impact. Join us on our journey to make the world
            a better place through technology and innovation.
          </p>
          <button className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
