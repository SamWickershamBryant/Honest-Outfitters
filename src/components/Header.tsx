'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const menuItems = [
    { name: '5 Star Corporate Hunts', href: '/corporate-hunts' },
    { name: 'Super/Trophy Exotics', href: '/trophy-exotics' },
    { name: 'Budget Friendly Hunts', href: '/budget-hunts' },
    { name: 'Free Range Big Game', href: '/free-range-big-game' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen && 
        menuRef.current && 
        buttonRef.current && 
        !menuRef.current.contains(event.target as Node) && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed w-full md:bg-[#2c1810]/90 text-white z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="hidden md:flex items-center">
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
            <Link 
              href="/contact" 
              className="bg-[#e67e22] hover:bg-[#d35400] text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              Contact Us
            </Link>
          </div>

          {!isMenuOpen && (
            <button
              ref={buttonRef}
              className="md:hidden p-2 bg-[#2c1810]/90 hover:bg-[#f5f5dc]/50 rounded transition-colors ml-auto"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </button>
          )}
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div 
            ref={menuRef}
            className="md:hidden fixed top-4 left-4 right-4 bg-[#2c1810]/95 z-50 h-auto rounded-xl shadow-lg"
          >
            <div className="p-4 flex justify-between items-center border-b border-white/20">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/assets/logo_white.PNG"
                  alt="Honest Outfitters Logo"
                  width={150}
                  height={45}
                  className="h-10 w-auto"
                />
              </Link>
              <button
                className="p-2 bg-[#f5f5dc]/30 hover:bg-[#f5f5dc]/50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col space-y-4 p-5">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg hover:text-[#f5f5dc] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/contact" 
                className="bg-[#e67e22] hover:bg-[#d35400] text-white px-4 py-3 rounded-lg transition-colors font-medium w-full text-center text-lg mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 