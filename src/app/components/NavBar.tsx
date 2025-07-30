'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/writing', label: 'Writing' },
  { href: '/guestbook', label: 'Guestbook' },
  { href: '/contact', label: 'Contact' },
]

export default function NavBar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-lg border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center">
          <div className="flex items-center space-x-1 bg-gray-50/80 rounded-2xl p-2 shadow-sm border border-gray-100">
            {navItems.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ease-out
                    ${isActive 
                      ? 'text-white bg-gradient-to-r from-pink-400 to-red-500 shadow-lg shadow-pink-500/25' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                    }
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2
                    transform hover:scale-105 active:scale-95`
                  }
                >
                  {item.label}
                  {isActive && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-400 to-red-500 opacity-0 animate-pulse"></div>
                  )}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="text-lg font-semibold text-gray-800">
            Harini
          </div>

          {/* Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 mt-1 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-xl transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="grid grid-cols-2 gap-3">
              {navItems.map((item) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-4 rounded-xl font-medium text-sm transition-all duration-200 text-center
                      ${isActive 
                        ? 'text-white bg-gradient-to-r from-pink-400 to-red-500 shadow-lg' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50 border border-gray-100'
                      }
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2
                      transform hover:scale-105 active:scale-95`
                    }
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 