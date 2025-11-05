"use client"

import { useState } from "react"

export default function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const leftServices = [
    { title: "Sahara Desert Adventures", description: "" },
    { title: "Authentic Medina Tours", description: "" },
    { title: "Traditional Cooking Classes", description: "" },
  ]

  const rightServices = [
    { title: "Coastal Village Escapes", description: "" },
    { title: "Local Market Experiences", description: "" },
    { title: "Desert Oasis Exploration", description: "" },
  ]

  return (
    <section id="services" className="w-full bg-[#6EADD9] py-12 sm:py-14 md:py-16 lg:py-20 text-chart-3 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-background bg-chart-1">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">WHAT YOU'LL EXPERIENCE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 text-white text-center">
          {/* Left Column */}
          <div className="space-y-4 sm:space-y-5">
            {leftServices.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                onTouchStart={() => setHoveredService(index)}
                className={`transition-all duration-300 cursor-pointer touch-manipulation py-2 ${hoveredService === index ? "scale-105" : ""}`}
              >
                <p className="text-base sm:text-lg md:text-xl font-medium">{service.title}</p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-5">
            {rightServices.map((service, index) => (
              <div
                key={index + 3}
                onMouseEnter={() => setHoveredService(index + 3)}
                onMouseLeave={() => setHoveredService(null)}
                onTouchStart={() => setHoveredService(index + 3)}
                className={`transition-all duration-300 cursor-pointer touch-manipulation py-2 ${
                  hoveredService === index + 3 ? "scale-105" : ""
                }`}
              >
                <p className="text-base sm:text-lg md:text-xl font-medium">{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
