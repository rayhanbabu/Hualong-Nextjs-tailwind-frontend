"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import useFetch from "@/utils/useFetch";
import { base_img } from "@/app/api/image_url";
import Link from "next/link";

// Skeleton Loader Component
const SkeletonLoader = () => (
  <div className="grid max-w-screen-xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {Array(3)
      .fill()
      .map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
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
  const { category } = useParams();
  const [page, setPage] = useState(1); // Page state for pagination
  const [searchQuery, setSearchQuery] = useState(null);
  const [search, setSearch] = useState(false);
  
  const handleSearch = () => {
    setSearch(prev => !prev);

  }
  const { data, loading } = search ? useFetch(`/product/${category}?search=${searchQuery}`) : useFetch(`/product/${category}?page=${page}`); // Fetch data based on category and page
  // Pagination component
  const Pagination = ({ currentPage, totalPages }) => {
    console.log(currentPage, totalPages)
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    

    return (
      <div className="flex justify-center space-x-2 mt-8">
        {/* Previous Button */}
        <button
          onClick={() => setPage(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-gray-800 text-white hover:bg-gray-900"}`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setPage(number)}
            className={`px-4 py-2 rounded ${number === currentPage ? "bg-blue-600 text-white" : "bg-gray-300 hover:bg-gray-400"}`}
          >
            {number}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => setPage(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-gray-800 text-white hover:bg-gray-900"}`}
        >
          Next
        </button>
      </div>
    );
  };

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-8 shadow-lg my-10">
      {/* Page Header */}
      <div className="flex flex-wrap gap-3 justify-evenly items-center">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          {data?.data[0]?.category_name}
        </h1>
        <div className="search p-1 border-2 border-red-500 mb-2">
          <input type="text" className="px-2 py-2 me-2 focus:border-none outline-none focus:outline-none" onChange={(e) => setSearchQuery(e.target.value)} placeholder="Enter a product id" />
          <button className="text-white bg-red-500 px-3 py-2" onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="border-b-2 border-gray-300 mb-8"></div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {search && !data?.data.length? <p>No product found!</p>:data?.data?.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center bg-white rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Product Image */}
            <img
              src={base_img + product.image1 || "https://via.placeholder.com/200"}
              alt={product.title}
              className="w-full h-48 object-cover mb-4"
            />

            {/* Product Title */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {product.title}
            </h2>

            {/* View Details Button */}
            <button className="bg-red-700 text-white px-6 py-2 rounded w-full hover:bg-red-800 transition-colors duration-300">
              <Link href={`/product/${category}/${product.id}`}>View Details</Link>
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {data && (
        <Pagination currentPage={page} totalPages={data?.last_page} />
      )}
    </div>
  );
}
