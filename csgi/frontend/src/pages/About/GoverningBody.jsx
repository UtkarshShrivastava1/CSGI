import React from "react";

const GoverningBody = () => {
  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden">
      {/* Header */}
      <div className="h-40 bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d173b]">
              Governing Body
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              CSIT | Leadership & Oversight
            </p>
            <div className="h-0.5 w-14 bg-[#0d173b] mt-3 rounded"></div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="p-6 overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-[#0d173b] text-white text-left text-sm uppercase tracking-wider">
              <th className="px-6 py-3">S.No</th>
              <th className="px-6 py-3">Name of Members</th>
              <th className="px-6 py-3">Responsibility</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {[
              ["1", "Er. Ajay Prakash Verma", "Chairman"],
              ["2", "Mrs. Satrupa Deshmukh", "Member"],
              ["3", "Mrs. Nandini Verma", "Member"],
              ["4", "Mr. Rajesh Deshmukh", "Member"],
              [
                "5",
                "Dr. Santosh Kumar Sharma , Principal, CSIT",
                "Member- Secretary (Ex-Officio)",
              ],
              ["6", "Mrs. Shakuntala Verma", "Member"],
              ["7", "Nominee of DTE, Raipur", "Member"],
              ["8", "Nominee of the CSVTU, Bhilai", "Member"],
              ["9", "Nominee of the AICTE", "Member"],
              ["10", "Prof. H. R. Chandrakar, Dean (Admission)", "Member"],
            ].map(([no, name, role], idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="px-6 py-4 font-medium text-[#0d173b]">{no}</td>
                <td className="px-6 py-4">{name}</td>
                <td className="px-6 py-4">{role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GoverningBody;
