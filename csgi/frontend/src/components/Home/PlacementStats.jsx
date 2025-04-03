import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const PlacementStats = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-[#0d173b] to-[#162a5b] text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Placement Highlights</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-200">
            Our students consistently achieve remarkable placement opportunities with leading companies worldwide
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard 
            title="Highest Package" 
            end={10} 
            suffix=" LPA" 
            icon={<PackageIcon />}
            description="Secured by CSE students"
          />
          <StatCard 
            title="Average Package" 
            end={5.2} 
            suffix=" LPA" 
            decimals={1}
            icon={<AverageIcon />}
            description="Across all departments" 
          />
          <StatCard 
            title="Companies Tie-up" 
            end={100} 
            suffix="+" 
            icon={<CompanyIcon />}
            description="For on-campus recruitment"
          />
          <StatCard 
            title="Placement Rate" 
            end={92} 
            suffix="%" 
            icon={<GraphIcon />}
            description="Students placed in 2024-25"
          />
        </div>
        
        {/* CTA Button */}
        {/* <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-white text-[#0d173b] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            View Detailed Placement Report
          </button>
        </div> */}
      </div>
    </div>
  );  
};

const StatCard = ({ title, end, suffix, decimals = 0, icon, color,description }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div 
      ref={ref} 
      className="p-8 bg-white text-center bg-opacity-10 backdrop-blur-sm rounded-lg border border-white border-opacity-20 transform transition-all duration-500 hover:scale-105 hover:bg-opacity-20"
    >
      <div className="flex items-center justify-center mb-6">
        <div className="w-16 h-16 flex items-center ${color} justify-center rounded-full bg-white bg-opacity-20">
          {icon}
        </div>
      </div>
      <h3 className="text-xl text-[#0d173b] font-semibold mb-2">{title}</h3>
      <div className="text-5xl font-bold text-[#0d173b] mb-3">
        {inView ? <CountUp start={0} end={end} duration={2.5} suffix={suffix} decimals={decimals} /> : "0"}
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

// Icons for each stat
const PackageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const AverageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const CompanyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const GraphIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  </svg>
);

export default PlacementStats;

