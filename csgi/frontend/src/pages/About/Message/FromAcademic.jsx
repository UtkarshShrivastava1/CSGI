import React from 'react'

const FromAcademic = () => {
  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
      {/* Hero Section */}
      <div className="h-56 md:h-72 bg-gradient-to-r from-[#0d173b] to-[#1e305f] flex items-center justify-center relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 scale-150 translate-y-10">
            <div className="w-20 h-60 bg-white/10 rounded-full blur-xl absolute -left-10"></div>
            <div className="w-20 h-40 bg-white/10 rounded-full blur-xl absolute right-20 top-10"></div>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white z-10 text-center">
          Message From Director(Academic)
        </h1>
      </div>

      {/* Main Content */}
      <div className="p-6 md:p-10 bg-gradient-to-b from-white to-gray-50">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Academic Photo */}
          <div className="w-full md:w-1/3">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img
                src="/path-to-academic-photo.jpg" // Replace with actual path
                alt="Academic"
                className="w-full object-cover object-top rounded-lg border border-gray-200"
              />
              <div className="text-center mt-4">
                <p className="font-semibold text-lg text-[#0d173b]">
                  Dr. Academic Name
                </p>
                <p className="text-sm text-gray-600">Academic Head, CSIT</p>
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div className="w-full md:w-2/3 text-justify text-gray-800 text-[15px] leading-relaxed space-y-4">
            <p>
              As the Academic Head of CSIT, I am proud to lead an institution that is committed to academic excellence and innovation in education. Our faculty members are dedicated to providing the highest quality education to our students.
            </p>
            <p>
              At CSIT, we believe in a holistic approach to education that combines theoretical knowledge with practical experience. Our curriculum is designed to prepare students for the challenges of the modern world and equip them with the skills needed to succeed in their chosen fields.
            </p>
            <p>
              We continuously strive to improve our teaching methods and incorporate the latest technologies and research findings into our courses. Our goal is to ensure that our graduates are not only well-prepared for their careers but also capable of making meaningful contributions to society.
            </p>
            <p>
              I encourage all students to take full advantage of the opportunities available at CSIT and to engage actively in their learning journey. Remember that education is not just about acquiring knowledge; it's about developing critical thinking skills, creativity, and a passion for lifelong learning.
            </p>
            <p className="font-semibold text-[#0d173b]">
              I wish all our students success in their academic pursuits and future endeavors.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FromAcademic
