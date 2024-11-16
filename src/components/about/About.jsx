"use client";
import React from "react";
import useFetch from "@/utils/useFetch";
import Link from "next/link";

function AboutUs() {
  // Fetch data using the custom hook
  const { data, loading } = useFetch("/notice/79");
  console.log(data)
  // Skeleton loader component
  const SkeletonLoader = () => (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-300 rounded w-3/4 mb-6"></div>
      <div className="h-4 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 rounded mb-4"></div>
      <div className="h-10 bg-gray-300 rounded w-1/2"></div>
    </div>
  );

  return (
    <div className="max-w-screen-xl py-16 mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-8 items-start">
        
        {/* Left Side - Demo Video */}
        <div className="w-full">
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4" // Sample video URL
            controls
            className="w-full h-auto shadow-md"
          ></video>
        </div>

        {/* Right Side - About Us Content */}
        <div className="w-full">
          {/* If loading, show skeleton loader */}
          {loading ? (
            <SkeletonLoader />
          ) : (
            // Display content if data is available
            data && data.data && data.data.length > 0 && (
              <>
                <h2 className="text-3xl sm:text-4xl -mt-16 text-red-700 mb-8">
                  {data.data[0]?.title || "Title not available"}
                </h2>
                <p
                  className="text-gray-700 mb-6 line-clamp-6"
                  dangerouslySetInnerHTML={{ __html: data.data[0]?.desc || "Description not available" }}
                ></p>
                <button className="bg-red-700 text-white px-6 py-2 font-semibold hover:bg-red-600 transition duration-300">
                  <Link href="/about-us">Details</Link>
                </button>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
