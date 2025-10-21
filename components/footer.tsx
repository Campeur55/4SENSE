"use client"

import { useState, useEffect } from "react"

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-zinc-200 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-200 bg-zinc-200">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 py-1 font-medium bg-zinc-200">
          {/* Left Column - Social */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-gray-800 mb-1 text-xs md:text-sm">LET'S CONNECT!</h4>
            <div className="flex justify-center md:justify-start gap-2">
              <a href="#" className="text-[#6EADD9] hover:text-[#5a96c0] transition-colors text-xs">
                f
              </a>
              <a href="#" className="text-[#6EADD9] hover:text-[#5a96c0] transition-colors text-xs">
                in
              </a>
              <a href="#" className="text-[#6EADD9] hover:text-[#5a96c0] transition-colors text-xs">
                ig
              </a>
            </div>
          </div>

          {/* Center Column - Logo */}
          <div className="flex justify-center items-center">
            <div className="text-center">
              <div className="text-lg md:text-xl font-bold text-[#6EADD9] mb-1">Wellness</div>
              <p className="text-gray-700 text-xs md:text-xs">Tales Changing Therapy</p>
            </div>
          </div>

          {/* Right Column - Contact */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-gray-800 mb-1 text-xs md:text-sm">CONTACT</h4>
            <p className="text-gray-700 text-xs md:text-xs">
              hello@wellness.com
              <br />
              (555) 123-4567
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 py-1 md:py-2 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-600 text-xs md:text-xs text-center md:text-left">
            &copy; {currentYear} TALES CHANGING THERAPY | SITE CONTENTS
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[#6EADD9] text-sm">✓</span>
            <a href="#" className="text-[#6EADD9] hover:underline text-xs md:text-xs">
              Psychology Today
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
