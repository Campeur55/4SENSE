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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 py-6 sm:py-8 md:py-10 font-medium bg-zinc-200">
          {/* Left Column - Social */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">FOLLOW US</h4>
            <div className="flex justify-center md:justify-start gap-3 sm:gap-4">
              <a href="#" className="text-[#6EADD9] hover:text-[#5a96c0] transition-colors text-base sm:text-lg touch-manipulation p-2 -m-2" aria-label="Facebook">
                f
              </a>
              <a href="#" className="text-[#6EADD9] hover:text-[#5a96c0] transition-colors text-base sm:text-lg touch-manipulation p-2 -m-2" aria-label="Instagram">
                ig
              </a>
              <a href="#" className="text-[#6EADD9] hover:text-[#5a96c0] transition-colors text-base sm:text-lg touch-manipulation p-2 -m-2" aria-label="Twitter">
                tw
              </a>
            </div>
          </div>

          {/* Center Column - Logo */}
          <div className="flex justify-center items-center">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-2xl font-bold text-[#6EADD9] mb-1 sm:mb-2">Tunisia Unveiled</div>
              <p className="text-gray-700 text-xs sm:text-sm">Authentic Local Experiences</p>
            </div>
          </div>

          {/* Right Column - Contact */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">CONTACT</h4>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              hello@tunisiaunveiled.com
              <br />
              +216 XX XXX XXX
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 py-3 sm:py-4 md:py-5 flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-3">
          <p className="text-gray-600 text-xs sm:text-sm text-center md:text-left">
            &copy; {currentYear} Tunisia Unveiled. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <a href="#" className="text-[#6EADD9] hover:underline text-xs sm:text-sm touch-manipulation">
              Privacy Policy
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-[#6EADD9] hover:underline text-xs sm:text-sm touch-manipulation">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
