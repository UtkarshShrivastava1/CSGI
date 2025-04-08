import React from "react"
import Link from "next/link"
import Image from "next/image"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#0d173b] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative">
                <Image
                  src="/images/logo.png"
                  alt="CSGI Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">CSGI</h3>
                <p className="text-sm text-gray-300">Chhattisgarh Swami Vivekanand Technical University</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Empowering students with quality education and technical excellence since 2001.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaFacebookF size={24} />
              </a>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaTwitter size={24} />
              </a>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaInstagram size={24} />
              </a>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300 text-sm">
                  CSIT Campus, Durg<br />
                  Chhattisgarh, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300 text-sm">
                  +91 123 456 7890<br />
                  +91 987 654 3210
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300 text-sm">
                  info@csgi.edu.in<br />
                  admission@csgi.edu.in
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-300 text-sm">
              Subscribe to our newsletter for the latest updates and news.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="w-full bg-white text-[#0d173b] px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} CSGI. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-300 hover:text-white transition-colors text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 