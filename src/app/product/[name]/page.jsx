
"use client";
import { useParams, useRouter } from "next/navigation";
import React from "react";

export default function LeatherBagsPage() {

  const {name} = useParams();
  // Dummy data for products
  const products = [
    {
      id: 1,
      title: "Classic Leather Bag",
      image: "https://via.placeholder.com/200", // Replace with actual image URLs
    },
    {
      id: 2,
      title: "Premium Handbag",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      title: "Vintage Leather Satchel",
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-8 shadow-lg my-10">
      
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">{name}</h1>
      <div className="border-b-2 border-gray-300 mb-8"></div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center bg-white rounded-lg p-6  hover:shadow-xl transition-shadow duration-300">
            
            {/* Product Image */}
            <img src={"https://plus.unsplash.com/premium_photo-1728983986076-b3ce2963fc3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={product.title} className="w-full h-48 object-cover mb-4" />
            
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
