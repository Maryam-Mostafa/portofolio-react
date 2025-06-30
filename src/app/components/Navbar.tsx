// src/components/Navbar.tsx
"use client";

import React from 'react';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) => {
  const navSections = ['home', 'about', 'services', 'products', 'videos', 'why-us'];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md transition-all duration-300 h-30">
      {/* ADJUSTED: Removed px-6 from nav. Added px-4 back to div.container for consistent, small padding. */}
      {/* The `mx-auto` on the container ensures equal left/right space outside the container's max-width.
          The `px-4` here will provide the 'small margin' from the screen edges to the content. */}
      <div className="container mx-auto px- flex justify-between items-center h-full">
        {/* REVERTED: Removed negative margins (-ml-4 md:-ml-8) from this div. */}
        {/* REVERTED: Re-added p-2 to the <a> tag for default logo padding inside the nav. */}
        <div className="flex items-center">
          {/* Company Logo */}
          <a href="#home" onClick={() => scrollToSection('home')} className="rounded-lg p-2">
            <img
              src="logo1.png"
              alt="Eastflow Oceanic Supply Chain Co., Limited"
              className="h-16 md:h-20 w-auto"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src="https://placehold.co/150x50/FFFFFF/0A2342?text=EASTFLOW+OCEANIC"; }}
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center h-full">
          {navSections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={() => scrollToSection(section)}
                className={`relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-1
                  ${activeSection === section ? 'text-blue-600 after:w-full after:bg-blue-600' : 'after:w-0 after:bg-gray-400'}
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300`}
              >
                {/* Static English text */}
                {section === 'home' ? 'Home' :
                 section === 'about' ? 'About' :
                 section === 'services' ? 'Services' :
                 section === 'products' ? 'Products' :
                 section === 'videos' ? 'Videos' :
                 section === 'why-us' ? 'Why Us' : section}
              </a>
            </li>
          ))}
          <li>
              <a
                href="#footer-contact"
                onClick={() => scrollToSection('footer-contact')}
                className={`relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-1
                  ${activeSection === 'footer-contact' ? 'text-blue-600 after:w-full after:bg-blue-600' : 'after:w-0 after:bg-gray-400'}
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300`}
              >
                Contact
              </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center h-full">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
            aria-label="Toggle navigation"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-lg">
          <ul className="flex flex-col items-center space-y-4">
            {navSections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => scrollToSection(section)}
                  className={`text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors duration-300 py-1 px-4 rounded-md
                    ${activeSection === section ? 'bg-blue-50 text-blue-600' : ''}`}
                >
                  {/* Static English text */}
                  {section === 'home' ? 'Home' :
                   section === 'about' ? 'About' :
                   section === 'services' ? 'Services' :
                   section === 'products' ? 'Products' :
                   section === 'videos' ? 'Videos' :
                   section === 'why-us' ? 'Why Us' : section}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#footer-contact"
                onClick={() => scrollToSection('footer-contact')}
                className={`text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors duration-300 py-1 px-4 rounded-md
                  ${activeSection === 'footer-contact' ? 'bg-blue-50 text-blue-600' : ''}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;