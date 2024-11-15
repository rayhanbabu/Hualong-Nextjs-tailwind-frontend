"use client"
import React, { useState } from "react";

const ProductDetailsPage = () => {
  // Dummy images for the product
  const productImages = [
    "https://plus.unsplash.com/premium_photo-1728983986076-b3ce2963fc3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1728983986076-b3ce2963fc3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1728983986076-b3ce2963fc3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1728983986076-b3ce2963fc3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  // State to track the selected main image
  const [mainImage, setMainImage] = useState(productImages[0]);

  return (
    <div className="max-w-screen-lg mx-auto p-8 space-y-8">
      
      {/* Top Section: Product Images and Details */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left: Main Image and Thumbnail Images */}
        <div className="flex flex-col items-center space-y-4">
          
          {/* Main Image */}
          <div className="w-full max-w-md">
            <img
              src={mainImage}
              alt="Main Product"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          
          {/* Thumbnail Images */}
          <div className="flex gap-4">
            {productImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setMainImage(img)}
                className={`w-16 h-16 object-cover rounded-lg cursor-pointer ${
                  mainImage === img ? "ring-2 ring-red-500" : ""
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Right: Product Details */}
        <div className="flex-1 space-y-4">
          
          {/* Product Title, Category, and Brand */}
          <h1 className="text-3xl font-bold text-gray-800">Product Title</h1>
          <p className="text-gray-600">Category: Bags</p>
          <p className="text-gray-600">Brand: LeatherCo</p>
          
          {/* Request a Quote Button */}
          <button className="mt-4 bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-800 transition">
            Request a Quote
          </button>
        </div>
      </div>
      
      {/* Bottom Section: Product Summary and Specifications */}
      <div className="space-y-8">
        
        {/* Product Summary */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product Summary</h2>
          <p className="text-gray-600">
            This premium leather bag is designed with style and durability in mind. Perfect for both casual and formal settings, it provides ample space while maintaining a sleek look. The high-quality materials ensure long-lasting wear, while the design offers both comfort and functionality.
          </p>
        </section>
        
        {/* Product Specifications */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Specifications</h2>
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
            <tbody>
              <tr className="bg-gray-100">
                <td className="p-3 border-b border-gray-300 font-medium">Material</td>
                <td className="p-3 border-b border-gray-300">100% Genuine Leather</td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-300 font-medium">Dimensions</td>
                <td className="p-3 border-b border-gray-300">12" x 8" x 4"</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border-b border-gray-300 font-medium">Weight</td>
                <td className="p-3 border-b border-gray-300">1.2 kg</td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-300 font-medium">Color</td>
                <td className="p-3 border-b border-gray-300">Brown</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 font-medium">Warranty</td>
                <td className="p-3">2 Years</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
