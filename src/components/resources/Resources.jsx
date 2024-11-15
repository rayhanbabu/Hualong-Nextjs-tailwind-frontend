import React from "react";

export default function Resources() {
  return (
    <div className="max-w-screen-xl mx-auto p-8">
      
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-center mb-10">Key Resources</h1>
      
      {/* Resource Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {[
          {
            logo: "🔑",
            title: "Resource One",
            details: "This resource provides insights on effective project management, strategy, and planning.",
          },
          {
            logo: "📘",
            title: "Resource Two",
            details: "An in-depth guide on leveraging digital tools for collaboration and productivity.",
          },
          {
            logo: "🛠️",
            title: "Resource Three",
            details: "Essential tools and resources for successful remote work and efficient team communication.",
          },
        ].map((resource, index) => (
          
          <div key={index} className="flex flex-col items-center bg-white border border-gray-300 rounded-lg p-6 shadow-lg text-center">
            
            {/* Logo */}
            <div className="text-6xl text-red-800 mb-4">{resource.logo}</div>
            
            {/* Heading */}
            <h2 className="text-2xl font-semibold mb-2">{resource.title}</h2>
            
            {/* Details */}
            <p className="text-gray-600">
              {resource.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
