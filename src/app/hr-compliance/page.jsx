"use client"
import useFetch from '@/utils/useFetch'
import React from 'react'

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

function HR() {
  const { data, loading } = useFetch("/notice/83");

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-[30vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.jpg?s=2048x2048&w=is&k=20&c=aipF63e5nI-DxreysL9XbP9S_kYbbVeBQAw5d3qzSUs=')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="flex-col">
            <h1 className="text-5xl font-bold text-center">HR Compliance</h1>
            <div className="text-center mt-4 text-gray-400">
              <p className="text-white text-xl">Home/ <span>HR compliance</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-screen-xl mx-auto px-2 my-8">
        <div className="details">
          {/* Show Skeleton Loader while loading */}
          {loading ? (
            <SkeletonLoader />
          ) : (
            data?.data?.map((item, index) => (
              <div
                key={index}
                className="mb-6 p-4 bg-white shadow rounded-md"
                dangerouslySetInnerHTML={{ __html: item.desc }}
              ></div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default HR;
