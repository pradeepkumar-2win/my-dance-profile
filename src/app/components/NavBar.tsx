'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/projects', label: 'Projects' },
  { href: '/writing', label: 'Writing' },
  { href: '/awards', label: 'Awards' },
  { href: '/media', label: 'Media' },
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
    <nav className="sticky top-0 z-30 w-full bg-white/70 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-3">
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-wrap justify-center gap-4">
          {navItems.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-full font-medium transition-all duration-200
                  ${isActive ? 'text-purple-700' : 'text-gray-700 hover:text-purple-600'}
                  hover:bg-gradient-to-r hover:from-pink-200/60 hover:to-purple-200/60
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 focus-visible:outline-offset-2`
                }
              >
                {item.label}
                {isActive && (
                  <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-8 h-1 rounded-full bg-gradient-to-r from-pink-400 to-purple-500"></span>
                )}
              </Link>
            )
          })}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          {/* Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 focus-visible:outline-offset-2"
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>

          {/* Mobile Menu */}
          <div className={`absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2">
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
                      className={`px-4 py-3 rounded-lg font-medium transition-all duration-200
                        ${isActive ? 'text-purple-700 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'}
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 focus-visible:outline-offset-2`
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
      </div>
    </nav>
  )
} 