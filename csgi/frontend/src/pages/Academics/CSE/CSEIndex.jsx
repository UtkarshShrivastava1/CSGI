import {
  Beaker,
  BookOpen,
  Briefcase,
  ChevronDown,
  Menu,
  Target,
  Users,
  X
} from "lucide-react";
import { useState } from "react";

import AimContent from "./Aim.jsx";
import Career from "./Careers.jsx";
import CourseOutcome from "./CourseOutcome.jsx";
import Faculty from "./Faculty.jsx";
import LaboratoriesContent from "./laboratory.jsx";

export default function ModernDepartmentPage() {
  const [activeTab, setActiveTab] = useState("aim");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Content data for tabs
  const tabContent = {
    aim: {
      title: "Our Aim",
      icon: <Target className="text-indigo-500" />,
      content: <AimContent />,
    },
    laboratories: {
      title: "Laboratories",
      icon: <Beaker className="text-emerald-500" />,
      content: <LaboratoriesContent />,
    },
    outcomes: {
      title: "Course Outcomes",
      icon: <BookOpen className="text-amber-500" />,
      content: <CourseOutcome />,
    },
    careers: {
      title: "Career Opportunity",
      icon: <Briefcase className="text-rose-500" />,
      content: <Career />,
    },
    faculty: {
      title: "Faculty Members",
      icon: <Users className="text-blue-500" />,
      content: <Faculty />,
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
        className={`fixed lg:sticky top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 transform 
        ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        bg-white shadow-md flex-shrink-0 flex flex-col rounded-md lg:mx-4 lg:my-4 overflow-hidden`}
      >
        {/* Dark header */}
        <div className="bg-gray-900 text-white px-6 py-4">
          <h2 className="text-xl font-bold">Department Navigation</h2>
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

      {/* Content area */}
      <div className="flex-1 lg:ml-0 mt-16 lg:mt-0 p-4 lg:p-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header with gradient background */}
          <div className="bg-gradient-to-r from-[#0d173b] to-[#1e305f] py-6 px-6">
            <div className="flex items-center">
              <div className="p-3 bg-white bg-opacity-20 rounded-lg mr-4 shadow-sm">
                <span className="block w-6 h-6 text-white">{tabContent[activeTab].icon}</span>
              </div>
              <h2 className="text-2xl font-bold text-white">
                {tabContent[activeTab].title}
              </h2>
            </div>
          </div>

          {/* Mobile tab selector */}
          <div className="block lg:hidden border-b border-gray-100">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-between w-full p-4 text-left font-medium text-gray-700"
            >
              <div className="flex items-center">
                <span>{tabContent[activeTab].title}</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  mobileMenuOpen ? "transform rotate-180" : ""
                }`}
              />
            </button>

            {mobileMenuOpen && (
              <div className="border-t border-gray-100 bg-gray-50">
                {Object.keys(tabContent).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center w-full p-3 text-left ${
                      activeTab === tab
                        ? "bg-indigo-50 text-indigo-700"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span>{tabContent[tab].title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop tab navigation */}
          <div className="hidden lg:flex border-b bg-gray-100 border-gray-200">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center justify-center py-4 px-6 transition-all duration-300 flex-1 ${
                  activeTab === tab
                    ? "border-b-2 border-[#0d173b] text-[#0d173b] bg-[#b2b9d29e] font-medium"
                    : "border-b-2 border-transparent text-gray-500 hover:bg-gray-300 hover:text-gray-700"
                }`}
              >
                <span className="text-sm lg:text-base">
                  {tabContent[tab].title}
                </span>
              </button>
            ))}
          </div>

          {/* Content area */}
          <div className="p-6 md:p-8">
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
    </div>
  );
}