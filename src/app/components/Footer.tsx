// src/components/Footer.tsx
import React from 'react';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const footerSections = ['home', 'about', 'services', 'products', 'videos', 'why-us'];

  return (
    <footer id="footer-contact" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-bold mb-4">Eastflow Oceanic Supply Chain Co., Limited</h4>
          <p className="text-gray-400 leading-relaxed text-sm">
            Your trusted partner in seamless global import and export solutions across the Middle East and North Africa.
            Committed to efficiency, reliability, and client satisfaction.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-6 md:mb-0 flex flex-col items-center">
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-center">
            {footerSections.map((section) => (
              <li key={`footer-${section}`}>
                <a
                  href={`#${section}`}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
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
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-bold mb-4">Contact Info</h4>
          <p className="text-gray-400 text-sm mb-2"><strong>Company Number:</strong> +86 13828743373</p>
          <p className="text-gray-400 text-sm mb-2"><strong>WeChat & WhatsApp:</strong> +86 13828743373</p>
          <p className="text-gray-400 text-sm mb-2"><strong>Owner:</strong> +86 18026590170</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Eastflow Oceanic Supply Chain Co., Limited. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;