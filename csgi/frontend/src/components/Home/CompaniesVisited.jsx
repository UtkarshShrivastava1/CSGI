import React from "react";

const CompaniesVisited = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Companies Visited</h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Our students have been placed in leading organizations across various
          industries. Here are some of the companies that have visited our campus:
        </p>
        
        {/* Logo Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            <img
              src="https://csitdurg.in/Photos/Company-logo/Wipro_Primary_Logo_Color_RGB.svg%20(1).png"
              alt="Wipro"
              className="h-16 mx-8 object-contain"
            />
            <img
              src="https://csitdurg.in/Photos/Company-logo/Accenture-logo.png"
              alt="Accenture"
              className="h-16 mx-8 object-contain"
            />
            <img
              src="https://csitdurg.in/Photos/Company-logo/download-removebg-preview.png"
              alt="Company 3"
              className="h-16 mx-8 object-contain"
            />
            <img
              src="https://csitdurg.in/Photos/Company-logo/TATA+TECHNOLOGIES.png"
              alt="Tata Technologies"
              className="h-16 mx-8 object-contain"
            />
            <img
              src="https://csitdurg.in/Photos/Company-logo/Wipro_Primary_Logo_Color_RGB.svg%20(1).png"
              alt="Wipro"
              className="h-16 mx-8 object-contain"
            />
            <img
              src="https://csitdurg.in/Photos/Company-logo/Accenture-logo.png"
              alt="Accenture"
              className="h-16 mx-8 object-contain"
            />
            <img
              src="https://csitdurg.in/Photos/Company-logo/download-removebg-preview.png"
              alt="Company 3"
              className="h-16 mx-8 object-contain"
            />
            <img
              src="https://csitdurg.in/Photos/Company-logo/TATA+TECHNOLOGIES.png"
              alt="Tata Technologies"
              className="h-16 mx-8 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesVisited;