"use client";
import React, { useState, useEffect } from "react";
import { base_img } from "@/app/api/image_url";
import useFetch from "@/utils/useFetch";
import { useParams, useSearchParams } from "next/navigation";

const ProductDetailsPage = () => {

  const {category,id} = useParams()
  const { data, loading } = useFetch(`/product_details/${category}/${id}`);
  console.log(data)
  // State to manage the modal (image modal)
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  console.log("data",data)
  // Function to open the modal
  const openModal = (img) => {
    setCurrentImage(img);
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage("");
  };

  // Skeleton loader placeholders
  const Skeleton = ({ height = "20px", width = "100%" }) => (
    <div
      className="bg-gray-300 animate-pulse"
      style={{ height, width, borderRadius: "8px" }}
    ></div>
  );

  // Check if product data is available
  if (loading) {
    return (
      <div className="max-w-screen-lg mx-auto p-8 space-y-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col items-center space-y-4">
            <Skeleton height="300px" width="100%" />
            <Skeleton height="300px" width="100%" />
          </div>

          <div className="flex-1 space-y-4">
            <Skeleton height="40px" width="60%" />
            <Skeleton height="20px" width="40%" />
            <Skeleton height="60px" width="100%" />
            <Skeleton height="40px" width="50%" />
          </div>
        </div>
      </div>
    );
  }

  const {
    title,
    category_name,
    image,
    image1,
    desc1,
    desc2,
  } = data?.data;

  return (
    <div className="max-w-screen-lg mx-auto p-8 space-y-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex items-center space-x-4">
          <div className="w-full">
            <img
              src={base_img + image}
              alt="Main Product"
              className="w-[150px] h-auto object-cover rounded-lg shadow-md cursor-pointer"
              onClick={() => openModal(base_img + image)}
            />
          </div>

          {image1 && (
            <div className="w-full">
              <img
                src={base_img + image1}
                alt="Second Product"
                className="w-[150px] h-auto object-cover rounded-lg shadow-md cursor-pointer"
                onClick={() => openModal(base_img + image1)}
              />
            </div>
          )}
        </div>

        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-600">Category: {category_name}</p>
          <p className="text-gray-600">Product Id: {id}</p>


          <button className="mt-4 bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-800 transition">
            Request a Quote
          </button>
        </div>
      </div>

      <div className="space-y-8 mt-10 border-t-2 pt-5">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product Summary</h2>
          <div
            className="text-gray-600 text-xl"
            dangerouslySetInnerHTML={{ __html: desc1 }}
          ></div>
        </section>
      </div>

      {/* Custom Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal} // Close the modal if clicked outside the image
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on the image
          >
            <img
              src={currentImage}
              alt="Product"
              className="max-w-full max-h-screen object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
