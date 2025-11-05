"use client"

import type React from "react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("[v0] Form submitted:", formData)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })

      setTimeout(() => setSubmitStatus("idle"), 3000)
      setIsSubmitting(false)
    }, 500)
  }

  return (
    <section id="contact" className="py-12 sm:py-14 md:py-16 lg:py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Reserve Your Journey Today</h2>
          <p className="text-foreground/70 text-sm sm:text-base md:text-lg leading-relaxed px-2">
            Ready to experience the real Tunisia? Fill out the form below and we'll get back to you within 24 hours to start planning your unforgettable adventure.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 md:py-3.5 border-b-2 border-foreground/30 focus:outline-none focus:border-primary bg-transparent text-foreground placeholder-foreground/50 transition-colors text-sm sm:text-base touch-manipulation"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 md:py-3.5 border-b-2 border-foreground/30 focus:outline-none focus:border-primary bg-transparent text-foreground placeholder-foreground/50 transition-colors text-sm sm:text-base touch-manipulation"
            />
          </div>

          <textarea
            name="message"
            placeholder="Tell us about your travel interests and what you'd like to experience in Tunisia..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 md:py-3.5 border-b-2 border-foreground/30 focus:outline-none focus:border-primary bg-transparent text-foreground placeholder-foreground/50 resize-none transition-colors text-sm sm:text-base touch-manipulation"
          />

          <div className="flex justify-center pt-4 sm:pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#6EADD9] text-white px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-lg font-semibold hover:bg-[#5a96c0] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base md:text-lg bg-primary shadow-md hover:shadow-lg touch-manipulation"
            >
              {isSubmitting ? "SENDING..." : "START YOUR JOURNEY"}
            </button>
          </div>

          {submitStatus === "success" && (
            <p className="text-center text-green-600 text-sm sm:text-base font-medium animate-in fade-in duration-300">
              Thank you! We'll be in touch within 24 hours.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
