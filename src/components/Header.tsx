'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: '5 Star Corporate Hunts', href: '/corporate-hunts' },
    { name: 'Super/Trophy Exotics', href: '/trophy-exotics' },
    { name: 'Budget Friendly Hunts', href: '/budget-hunts' },
  ];

  return (
    <header className="fixed w-full bg-[#2c1810]/90 text-white z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo_white.PNG"
              alt="Honest Outfitters Logo"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6 mr-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-[#f5f5dc] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <a href="tel:+15128101310" className="hover:text-[#f5f5dc] transition-colors">
              📞 Call Us
            </a>
            <a href="mailto:honestoutfittersllc@gmail.com" className="hover:text-[#f5f5dc] transition-colors">
              ✉️ Email Us
            </a>
          </div>

          <button
            className="md:hidden p-2 hover:bg-[#3d241a] rounded transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-[#f5f5dc] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a href="tel:+15128101310" className="hover:text-[#f5f5dc] transition-colors">
                📞 Call Us
              </a>
              <a href="mailto:honestoutfittersllc@gmail.com" className="hover:text-[#f5f5dc] transition-colors">
                ✉️ Email Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 