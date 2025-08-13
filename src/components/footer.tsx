import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#c8e0f3] to-[#1d3261] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h3 className="text-[#1d3261] font-bold text-lg mb-6 heading">
            QUICK LINKS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 text-[#1d3261]">
            <Link href="/" className="hover:text-[#0f1a3d] transition-colors">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-[#0f1a3d] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/events"
              className="hover:text-[#0f1a3d] transition-colors"
            >
              Upcoming Events
            </Link>
            <Link
              href="/yuva-sangam"
              className="hover:text-[#0f1a3d] transition-colors"
            >
              Yuva Sangam
            </Link>
            <Link
              href="/team"
              className="hover:text-[#0f1a3d] transition-colors"
            >
              Team
            </Link>
            <Link
              href="https://iitjammu.ac.in/"
              className="hover:text-[#0f1a3d] transition-colors"
            >
              IIT-JMU
            </Link>
            <Link
              href="https://ekbharat.gov.in/"
              className="hover:text-[#0f1a3d] transition-colors"
            >
              EBSB Official
            </Link>
          </div>
        </div>
        <div className="border-t border-white/20" />
        <div className="grid mt-10 md:grid-cols-2 gap-12 items-start">
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <Image
                src="/image.png"
                alt="Ek Bharat Shrestha Bharat Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <div className="text-white">
              <h2 className="text-2xl font-bold heading mb-1">EK BHARAT</h2>
              <h2 className="text-2xl font-bold heading mb-2">
                SHRESTHA BHARAT
              </h2>
              <p className="text-sm font-medium">IIT Jammu</p>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6 heading">
              CONTACT US
            </h3>
            <div className="space-y-3 text-white">
              <div>
                <span className="font-medium">Email - </span>
                <Link
                  href="mailto:ebsb@iitjammu.ac.in"
                  className="hover:text-gray-200 transition-colors"
                >
                  ebsb@iitjammu.ac.in
                </Link>
              </div>
              <div>
                <span className="font-medium">Contact - </span>
                <Link
                  href="tel:+919419226775"
                  className="hover:text-gray-200 transition-colors"
                >
                  +91 9419226775
                </Link>
              </div>
              <div>
                <span className="font-medium">Location - </span>
                <span>Indian Institute of Technology Jammu</span>
              </div>
              <div className="text-sm">
                Nagrota Bypass, PO Nagrota, Jammu, Jammu and Kashmir - 181221
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="https://www.instagram.com/ebsb.iitjammu/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
            <Link
              href="https://x.com/ebsb_edumin?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-black rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/in/ek-bharat-shreshta-bharat-iit-jammu-9a3962321/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
            <p className="ml-auto text-sm text-white/70 flex items-center gap-1 whitespace-nowrap">
              <span className="hidden sm:inline">Made with</span>
              <span className="text-red-500" aria-label="love">♥</span>
              <span className="hidden sm:inline">by</span>
              <Link
                href="https://www.linkedin.com/in/ks-iitjmu"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline hover:text-white transition-colors"
              >
                Kunal Sharma
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
