"use client";
import Link from "next/link";
import useFetch from "@/utils/useFetch";
import { base_img } from "../api/image_url";

const Faculty = () => {
  const { data, loading, error } = useFetch("/member/78"); // Example API endpoint

  // Handle error scenario
  if (error) {
    return <div className="text-center text-red-500">Error loading faculty data.</div>;
  }

  return (
    <div className="w-full bg-gray-100 py-5">
      <h1 className="py-4 text-black text-3xl font-bold capitalize text-center">Board of Directors</h1>

      <div className="max-w-screen-xl mx-auto px-3 py-5 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3 lg:grid-cols-3">
        {loading ? (
          // Skeleton loader while data is loading
          Array(3)
            .fill()
            .map((_, index) => (
              <div key={index} className="py-5 shadow-lg bg-white flex flex-col items-center justify-center gap-y-5">
                <div className="w-[200px] h-[200px] bg-gray-300 rounded-full animate-pulse"></div>
                <div className="bg-[var(--nav-color)] py-4 w-full text-center text-white">
                  <div className="w-3/4 h-6 bg-gray-300 mx-auto rounded mb-2 animate-pulse"></div>
                  <div className="w-2/3 h-4 bg-gray-300 mx-auto rounded mb-2 animate-pulse"></div>
                </div>
                <div className="w-3/4 h-10 bg-gray-300 rounded mb-4 animate-pulse"></div>
              </div>
            ))
      ) : (  
          // Actual data when loaded
          data?.data.map((item, index) => (
            <div key={index} className="py-5 shadow-lg bg-white flex flex-col items-center justify-center gap-y-5">
              <div className="rounded-full">
                <img
                  src={item?.image ? base_img + item?.image : "/images/avatar.jpg"}
                  alt="faculty"
                  className="w-[200px] h-[200px] object-cover rounded-full"
                />
              </div>
              <div className="bg-blue-900 py-4 w-full text-center text-white">
                <p className="text-xl">{item?.name}</p>
                <p className="uppercase mt-3 text-yellow-400 font-bold">{item?.designation}</p>
              </div>
              <Link href={ `/member/${item.id}`} className="bg-red-700 px-5 text-white py-2">
                View Profile
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Faculty;
