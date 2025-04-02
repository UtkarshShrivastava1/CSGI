import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const PlacementStats = () => {
  return (
    <div className="py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Placement Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard title="Highest Package" end={10} suffix=" LPA" />
          <StatCard title="Average Package" end={5.2} suffix=" LPA" decimals={1} />
          <StatCard title="Companies Tie-Up" end={100} suffix="+" />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, end, suffix, decimals = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">{title}</h3>
      <div ref={ref} className="text-4xl font-bold text-blue-600">
        {inView ? <CountUp start={0} end={end} duration={3} suffix={suffix} decimals={decimals} /> : "0"}
      </div>
    </div>
  );
};

export default PlacementStats;
