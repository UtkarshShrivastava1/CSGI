import { useState } from "react";
import {
  BookOpen,
  Briefcase,
  Users,
  Beaker,
  Menu,
  X,
  Target
} from "lucide-react";

import Library from './CentralLibrary';
import Workshop from './CentralWorkshop';
import ComputerCentre from './ComputerCentre';
import CanteenCafe from './CanteenAndCafe'
import StudentActivity from './StudentActivityCentre'
import SeminarHall from './SeminarHall'
import Hostel from './HostelAndOthers'

export default function ModernDepartmentPage() {
  const [activeTab, setActiveTab] = useState("Library");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Content data for tabs
  const tabContent = {
    Library: {
      title: "Central Library",
      icon: <BookOpen className="text-indigo-500" />,
      content: <Library />,
    },
    Workshop: {
      title: "Central Workshop",
      icon: <Beaker className="text-emerald-500" />,
      content: <Workshop/>,
    },
    ComputerCentre: {
      title: "Computer Centre",
      icon: <BookOpen className="text-amber-500" />,
      content: <ComputerCentre />,
    },
    CanteenCafe: {
      title: "Canteen & Cafe",
      icon: <Briefcase className="text-rose-500" />,
      content: <CanteenCafe />,
    },
    StudentActivity: {
      title: "Student Activity Centre",
      icon: <Users className="text-blue-500" />,
      content: <StudentActivity />,
    },
    SeminarHall: {
      title: "Seminar Hall",
      icon: <Target className="text-purple-500" />,
      content: <SeminarHall />,
    },
    Hostal: {
      title: "Hostel & Other Facilities",
      icon: <Users className="text-green-500" />,
      content: <Hostel />,
    },
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile menu toggle button */}
      <div className="block lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="p-2 rounded-md bg-white shadow-md text-gray-700"
        >
          {mobileSidebarOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Left navigation sidebar - styled according to image */}
      <div
        className={`fixed lg:sticky top-0 left-0 z-40 w-64 h-113 transition-transform duration-300 transform 
        ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        bg-white shadow-md flex-shrink-0 flex flex-col rounded-md lg:mx-4 lg:my-4 overflow-hidden`}
      >
        {/* Dark header */}
        <div className="bg-gray-900 text-white px-6 py-4">
          <h2 className="text-xl font-bold">Campus Facilities</h2>
        </div>
        
        {/* Navigation menu items */}
        <div className="flex-1 overflow-y-auto">
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setMobileSidebarOpen(false);
              }}
              className={`w-full px-6 py-4 text-left transition-colors duration-200 border-l-4
              ${
                activeTab === tab
                  ? "border-l-4 border-gray-900 bg-gray-50 text-gray-900 font-medium"
                  : "border-transparent text-gray-600 hover:bg-gray-50"
              }`}
            >
              {tabContent[tab].title}
            </button>
          ))}
        </div>
      </div>

      {/* Content area - removed header with icon */}
      <div className="flex-1 lg:ml-0 mt-16 lg:mt-0 p-4 lg:p-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Removed the header with icon and title */}
          
          <div className="prose prose-indigo max-w-none">
            {typeof tabContent[activeTab].content === "string" ? (
              <p className="text-gray-700 leading-relaxed">
                {tabContent[activeTab].content}
              </p>
            ) : (
              tabContent[activeTab].content
            )}
          </div>
        </div>
      </div>
    </div>
  );
}