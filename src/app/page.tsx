// src/app/page.tsx
"use client"; // This directive is crucial for using client-side hooks like useState and useEffect

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProductSection from './components/ProductSection';
import VideoShowcaseSection from './components/VideoShowcaseSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB'; // IMPORT THE NEW COMPONENT

const Home: React.FC = () => {
  // State for managing active section in the navbar (for smooth scrolling/highlighting)
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // State for mobile menu

  // Define the fixed height of your Navbar
  const NAVBAR_HEIGHT = 80; // Match this to the actual fixed height of your Navbar (h-20 = 80px)

  // Effect to handle scroll and update active section for navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'products', 'videos', 'why-us', 'footer-contact'];
      let currentActiveId = 'home'; // Default if no section is active

      // Iterate through sections from BOTTOM TO TOP
      // This is the most reliable strategy for scroll-spy:
      // It finds the first section (from the bottom) whose top edge has crossed
      // the `NAVBAR_HEIGHT` line (or is within a small buffer).
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const section = document.getElementById(sectionId);

        if (section) {
          const rect = section.getBoundingClientRect();
          // A section becomes active when its top edge is at or above the navbar's bottom edge (NAVBAR_HEIGHT)
          // AND it's still visible within the viewport.
          // A small `+ 5` pixel buffer added to NAVBAR_HEIGHT for a slightly more forgiving detection.
          if (rect.top <= NAVBAR_HEIGHT + 5 && rect.bottom > 0) {
            currentActiveId = sectionId;
            break; // Found the active section, stop checking higher sections
          }
        }
      }

      // --- Special check for when at the absolute top of the page. ---
      // This ensures 'home' is active immediately when scrolled completely up.
      // `window.scrollY` will be very small here.
      if (window.scrollY <= NAVBAR_HEIGHT / 2) { // Consider home active if scroll is less than half navbar height
        currentActiveId = 'home';
      }

      // --- Special check for when at the absolute bottom of the page. ---
      // This ensures 'footer-contact' is active when scrolled completely down.
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      const viewportHeight = window.innerHeight;

      // If scrolled to the very end of the document (within a small pixel buffer)
      if ((scrollY + viewportHeight) >= (documentHeight - 5)) { // 5px buffer from bottom
        currentActiveId = 'footer-contact';
      }

      // Update state only if the active section has changed to prevent unnecessary re-renders
      if (currentActiveId !== activeSection) {
        setActiveSection(currentActiveId);
      }
    };

    // Attach the scroll listener
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on page load to set the correct active section

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]); // Depend on activeSection to ensure the effect re-evaluates and stabilizes.

  // Function to scroll to a section when a navigation link is clicked
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // For all sections, we calculate the target scroll position to place
      // the top of the section just below the fixed navbar.
      const targetScrollY = element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;

      // Special handling for 'home' to ensure it goes to the very top.
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (id === 'footer-contact') {
        // Special handling for 'footer-contact' to ensure it goes to the very bottom.
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
      } else {
        // For all other sections, scroll to the calculated offset.
        window.scrollTo({
          top: targetScrollY,
          behavior: 'smooth'
        });
      }
      setActiveSection(id); // Immediately set active state on click for visual feedback
      setIsMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  return (
    <>
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <HeroSection activeSection={activeSection} />
      <AboutSection />
      <ServicesSection />
      <ProductSection />
      <VideoShowcaseSection />
      <WhyChooseUsSection />
      <Footer scrollToSection={scrollToSection} />
      <WhatsAppFAB /> {/* ADDED: The new WhatsApp Floating Action Button */}
    </>
  );
};

export default Home;