import React from 'react';
import { FileText } from 'lucide-react';

const Calendar = () => {
  // Data for the academic calendar table
  // These links can be updated in the future when PDFs are available
  const calendarData = [
    { year: '2024 - 2025', link: '#' },
    { year: '2023 - 2024', link: '#' },
    { year: '2022 - 2023', link: '#' },
    { year: '2021 - 2022', link: '#' },
    { year: '2020 - 2021', link: '#' },
    { year: '2019 - 2020', link: '#' },
    { year: '2018 - 2019', link: '#' },
  ];

  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white py-8 mb-8 rounded-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">Academic Calendar</h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Access academic calendars for planning your academic journey at CSIT
          </p>
        </div>
      </header>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-700 mb-4">
              The Academic Calendar provides a comprehensive schedule of academic events, including semester start and end dates, examination schedules, holidays, and other important academic activities. Students are advised to refer to the current academic calendar for planning their academic activities.
            </p>
          </div>

          {/* Calendar Table Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#0d173b] mb-4">Academic Calendars</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-[#0d173b] text-white">
                    <th className="py-3 px-4 text-left">Year</th>
                    <th className="py-3 px-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {calendarData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-3 px-4 border-t border-gray-200 font-medium">{item.year}</td>
                      <td className="py-3 px-4 border-t border-gray-200 text-center">
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1 bg-[#0d173b] text-white rounded-md hover:bg-[#1a2b5f] transition-colors duration-300"
                        >
                          <FileText className="mr-1 h-4 w-4" />
                          View Calendar
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 italic">
              Note: PDF links will be updated in the future. To add links, update the 'link' property in the calendarData array.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
