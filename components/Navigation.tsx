'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-effect shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Image
              src="/logo.png"
              alt="nextalent Logo"
              width={80}
              height={80}
              className=""
              onError={(e) => {
                // Fallback if logo doesn't exist yet
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'About', id: 'about' },
                { name: 'Platform', id: 'platform' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-accent px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 transform relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-accent p-2 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full glass-effect border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'About', id: 'about' },
                { name: 'Platform', id: 'platform' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-accent block px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 rounded-lg hover:bg-white/10"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
