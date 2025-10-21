"use client"

import { useState } from "react"

export default function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const leftServices = [
    { title: "Heartbreak Counseling", description: "" },
    { title: "Children Coping with Divorce", description: "" },
    { title: "Blind & Low-Vision Communities", description: "" },
  ]

  const rightServices = [
    { title: "Anxiety", description: "" },
    { title: "College Transitions", description: "" },
    { title: "Managing Stress", description: "" },
  ]

  return (
    <section id="services" className="w-full bg-[#6EADD9] py-12 md:py-16 text-chart-3 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-background bg-chart-1">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">SERVICES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-white text-center">
          {/* Left Column */}
          <div className="space-y-4">
            {leftServices.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className={`transition-all duration-300 cursor-pointer ${hoveredService === index ? "scale-105" : ""}`}
              >
                <p className="text-sm md:text-base font-medium">{service.title}</p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightServices.map((service, index) => (
              <div
                key={index + 3}
                onMouseEnter={() => setHoveredService(index + 3)}
                onMouseLeave={() => setHoveredService(null)}
                className={`transition-all duration-300 cursor-pointer ${
                  hoveredService === index + 3 ? "scale-105" : ""
                }`}
              >
                <p className="text-sm md:text-base font-medium">{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
