"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import useFetch from "@/utils/useFetch"; // Assuming useFetch is a custom hook you've created for fetching data
import { base_img } from "@/app/api/image_url";

// Skeleton Loader Component
const SkeletonLoader = () => (
  <div className="grid max-w-screen-xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {Array(3).fill().map((_, index) => (
      <div key={index} className="flex flex-col items-center bg-white rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
        
        {/* Skeleton for Product Image */}
        <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>
        
        {/* Skeleton for Product Title */}
        <div className="w-3/4 h-6 bg-gray-300 rounded mb-4"></div>
        
        {/* Skeleton for View Details Button */}
        <div className="w-full h-10 bg-gray-300 rounded mb-4"></div>
      </div>
    ))}
  </div>
);

export default function LeatherBagsPage() {
  const { category } = useParams(); // Get the dynamic parameter (name)
  
  // Use useFetch to fetch products based on the 'name' from the URL params
  const { data, loading } = useFetch(`/product/${category}`); // Assuming this API endpoint returns the products based on the category

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-8 shadow-lg my-10">
      
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">{data?.data[0].category_name}</h1>
      <div className="border-b-2 border-gray-300 mb-8"></div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.data?.map((product) => (
          <div key={product.id} className="flex flex-col items-center bg-white rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            
            {/* Product Image */}
            <img src={base_img + product.image1 || "https://via.placeholder.com/200"} alt={product.title} className="w-full h-48 object-cover mb-4" />
            
            {/* Product Title */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{product.title}</h2>
            
            {/* View Details Button */}
            <button className="bg-red-700 text-white px-6 py-2 rounded w-full hover:bg-red-800 transition-colors duration-300">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
