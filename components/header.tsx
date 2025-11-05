"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Experiences", href: "#services" },
    { label: "About", href: "#about" },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">Tunisia Unveiled</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base touch-manipulation"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => handleNavClick("#contact")}
            className="hidden md:block bg-primary text-primary-foreground px-4 lg:px-6 py-2 rounded-lg hover:bg-secondary active:scale-95 transition-all font-medium text-sm lg:text-base touch-manipulation"
          >
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden touch-manipulation p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors font-medium touch-manipulation active:bg-muted/80"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg hover:bg-secondary active:scale-[0.98] transition-all font-semibold mt-4 touch-manipulation"
            >
              Book Now
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
