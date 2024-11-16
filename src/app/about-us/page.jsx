"use client";
import React from "react";
import useFetch from "@/utils/useFetch";
import Link from "next/link"; // Import Link for navigation

// Skeleton Loader Component
const SkeletonLoader = () => (
  <div className="animate-pulse space-y-4 p-4">
    <div className="h-10 bg-gray-300 rounded w-3/4"></div>
    <div className="h-6 bg-gray-300 rounded w-full"></div>
    <div className="h-6 bg-gray-300 rounded w-5/6"></div>
    <div className="h-6 bg-gray-300 rounded w-1/2"></div>
    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
  </div>
);

function About() {
  // Fetch data for "About Details" from notice/79
  const { data: aboutData, loading: aboutLoading } = useFetch("/notice/79");

  // Fetch data for "At a Glance" from notice/82
  const { data: glanceData, loading: glanceLoading } = useFetch("/notice/82");

  return (
    <div className="mx-auto">
      {/* Image with Black Overlay */}
      <div
        className="relative w-full h-[20vh] sm:h-[30vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.jpg?s=2048x2048&w=is&k=20&c=aipF63e5nI-DxreysL9XbP9S_kYbbVeBQAw5d3qzSUs=')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center px-2 justify-center text-white">
          <div className="flex-col">
            <h1 className="text-5xl font-bold text-center">About Us</h1>
            <div className="text-center mt-4 text-gray-400">
              <p className="text-white text-xl">
                Home/ <span>ABOUT US</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid px-2 max-w-screen-xl mx-auto py-20 grid-cols-1 md:grid-cols-2 gap-8 mt-8 sm:mt-16">
        {/* Left Side: Video */}
        <div className="">
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

        {/* Right Side: About Details */}
        <div className="about-details flex flex-col justify-center">
          {/* Show skeleton loader for About Details while loading */}
          {aboutLoading ? (
            <SkeletonLoader />
          ) : (
            aboutData?.data && aboutData?.data.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  {aboutData.data[0]?.title || "About Us Title not available"}
                </h3>
                <p
                  className="text-lg text-gray-700  mb-6"
                  dangerouslySetInnerHTML={{
                    __html: aboutData.data[0]?.desc || "Description not available",
                  }}
                ></p>
                {/* <Link
                  href="/about-us"
                  className="bg-red-700 text-white px-6 py-2 font-semibold hover:bg-red-600 transition duration-300"
                >
                  Learn More
                </Link> */}
              </div>
            )
          )}
        </div>
      </div>

      {/* At a Glance Section */}
      <div className="mt-16 bg-gray-100 py-16">
        <h2 className="text-4xl text-red-700 text-center mb-12">At a Glance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto gap-8">
          {/* Left Side: At a Glance Data Content */}
          <div className="space-y-4">
            {/* Show skeleton loader for At a Glance data while loading */}
            {glanceLoading ? (
              <SkeletonLoader />
            ) : (
              glanceData?.data?.map((item, index) => (
                <div
                  key={index}
                  className="text-xl text-gray-700"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                ></div>
              ))
            )}
          </div>

          {/* Right Side: Dummy Image */}
          <div className="justify-center">
            <img
              src="https://static01.nyt.com/images/2024/07/25/multimedia/00china-travel-explainer-01-tjck/00china-travel-explainer-01-tjck-videoSixteenByNineJumbo1600.jpg"
              alt="Company Image"
              className="w-full max-w-md h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
