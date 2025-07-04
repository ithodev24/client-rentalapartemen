'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Daftar Unit', href: '/DaftarUnit' },
    { label: 'Testimoni', href: '/Testimoni' },
    { label: 'Kontak', href: '/Kontak' },
  ]

  return (
    <div className="bg-white px-4 md:px-10 py-3 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/images/logosewa.png" alt="Logo" className="w-8 h-8" />
          <span className="text-[#C79C20] font-semibold text-lg">Perfect Room</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4 items-center relative">
          {navItems.map((item) => {
            const isActive = pathname.toLowerCase() === item.href.toLowerCase()
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#EECE21] text-white rounded-b-xl shadow-md -mt-4'
                    : 'text-black hover:text-black'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-yellow-200 px-4 py-2 rounded-md shadow-md">
          {navItems.map((item) => {
            const isActive = pathname.toLowerCase() === item.href.toLowerCase()
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded text-sm font-semibold ${
                  isActive
                    ? 'bg-white text-red-600'
                    : 'text-black hover:text-red-600'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
