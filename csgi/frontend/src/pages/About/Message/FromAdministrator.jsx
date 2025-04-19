import React from 'react'

const FromAdministrator = () => {
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
          Message From Director(Administrator)
        </h1>
      </div>

      {/* Main Content */}
      <div className="p-6 md:p-10 bg-gradient-to-b from-white to-gray-50">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Administrator Photo */}
          <div className="w-full md:w-1/3">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img
                src="/path-to-administrator-photo.jpg" // Replace with actual path
                alt="Administrator"
                className="w-full object-cover object-top rounded-lg border border-gray-200"
              />
              <div className="text-center mt-4">
                <p className="font-semibold text-lg text-[#0d173b]">
                  Mr. Administrator Name
                </p>
                <p className="text-sm text-gray-600">Administrator, CSIT</p>
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div className="w-full md:w-2/3 text-justify text-gray-800 text-[15px] leading-relaxed space-y-4">
            <p>
              As the Administrator of CSIT, I am committed to ensuring that our institution operates efficiently and effectively to support the academic mission. Our administrative team works tirelessly to create an environment where students and faculty can thrive.
            </p>
            <p>
              We continuously strive to improve our administrative processes and infrastructure to better serve our students and staff. From maintaining state-of-the-art facilities to implementing innovative administrative solutions, we are dedicated to enhancing the overall experience at CSIT.
            </p>
            <p>
              Our goal is to provide seamless administrative support that allows our academic community to focus on what matters most: learning, teaching, and research. We believe that a well-managed institution is essential for academic excellence.
            </p>
            <p>
              I encourage all members of our community to reach out to our administrative team whenever they need assistance. We are here to help and support you in your academic journey at CSIT.
            </p>
            <p className="font-semibold text-[#0d173b]">
              Together, we can create an environment where excellence thrives and innovation flourishes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FromAdministrator
