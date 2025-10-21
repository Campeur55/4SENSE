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
    <section id="contact" className="py-12 md:py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Let's Chat!</h2>
          <p className="text-foreground/70 text-sm md:text-base">
            It takes courage to ask for help, and I honor the strength it took to make the decision to see a therapist.
            Let's chat and see if the right therapist for you!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 md:py-3 border-b border-foreground/30 focus:outline-none focus:border-primary bg-transparent text-foreground placeholder-foreground/50 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 md:py-3 border-b border-foreground/30 focus:outline-none focus:border-primary bg-transparent text-foreground placeholder-foreground/50 transition-colors"
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 md:py-3 border-b border-foreground/30 focus:outline-none focus:border-primary bg-transparent text-foreground placeholder-foreground/50 resize-none transition-colors"
          />

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#6EADD9] text-white px-8 py-2 md:py-3 rounded font-semibold hover:bg-[#5a96c0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base bg-primary"
            >
              {isSubmitting ? "SENDING..." : "SEND"}
            </button>
          </div>

          {submitStatus === "success" && (
            <p className="text-center text-green-600 text-sm md:text-base">Message sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  )
}
