// src/components/HeroSection.tsx
"use client";

import React, { useState, useEffect } from 'react'; // Added useState and useEffect imports

// Define the props interface for HeroSection
interface HeroSectionProps {
  activeSection: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ activeSection }) => {
  const [triggerAnimation, setTriggerAnimation] = useState(true);

  useEffect(() => {
    if (activeSection === 'home') {
      setTriggerAnimation(false);
      const timer = setTimeout(() => {
        setTriggerAnimation(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [activeSection]);

  return (
    <section
      id="home"
      className="relative text-white flex items-center justify-center min-h-screen py-20 overflow-hidden"
      style={{
        backgroundImage: `url(D:\web\portofolio - Copy\public\bg.jpg)`, // Assuming bg.jpg is in your public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* ADJUSTED: Changed max-w-full back to max-w-6xl (or try max-w-5xl if you want it narrower) */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 className={`text-6xl md:text-7xl font-extrabold leading-tight mb-6 ${triggerAnimation ? 'animate-fade-in-up' : ''}`}>
          Your Trusted Link: China to Middle East and Africa
        </h1>
        <p className={`text-2xl md:text-3xl font-light mb-10 opacity-90 ${triggerAnimation ? 'animate-fade-in-up animation-delay-500' : ''}`}>
          Quality from China. Delivered Worldwide.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;