"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Feature() {
  const router = useRouter();

  const handleClick = (product) => {
    // Map products to their respective IDs
    const productIds = {
      Men: 75,
      Women: 76,
      Child: 77,
    };

    // Navigate to the product page with the correct ID
    router.push(`/product/${productIds[product]}`);
  };

  return (
    <div
      className="relative sm:min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661879449050-069f67e200bd?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold">Our Exclusive Product</h1>
        
        {/* Bar */}
        <div className="w-16 h-1 bg-red-500 mt-4 mb-10"></div>
        
        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-xl">
          {["Men", "Women", "Child"].map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white text-center shadow-lg p-3 text-gray-800 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl"
              onClick={() => handleClick(product)} // Handle click event
            >
              {/* Product Title */}
              <h2 className="text-2xl text-red-500 mb-2">{product}</h2>
              
              {/* Product Image */}
              <img
                src="https://images.unsplash.com/photo-1473188588951-666fce8e7c68?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={product}
                className="w-full h-auto border-t-2 mt-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
