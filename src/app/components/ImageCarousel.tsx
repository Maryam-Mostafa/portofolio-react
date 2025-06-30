// src/components/ImageCarousel.tsx
"use client"; // This component uses client-side hooks like useState and useEffect

import React, { useState, useEffect } from 'react';

// Array of image paths for the carousel
// IMPORTANT: Ensure these images are placed in your Next.js 'public' directory
// For example, if your image is in public/images/my-image.jpg, use src="/images/my-image.jpg"
const images = [
  "D:\web\portofolio - Copy\public\seewing-woman.jpeg",
  "D:\web\portofolio - Copy\public\machines-mechanics.jpeg",
  "D:\web\portofolio - Copy\public\loop-box.jpeg",
];
interface ImageCarouselProps {
  // You can pass props like aspectRatio or defaultHeight if needed for customization
  autoplayInterval?: number; // Optional prop for autoplay speed in milliseconds
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ autoplayInterval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(goToNext, autoplayInterval);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [autoplayInterval]); // Re-run effect if interval changes

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-xl">
      <img
        src={images[currentIndex]}
        alt={`Carousel Image ${currentIndex + 1}`}
        // ADJUSTED: Increased height to h-96 for small screens and md:h-[500px] for medium+ screens
        className="w-full h-96 md:h-[500px] object-cover transition-opacity duration-700 ease-in-out"
        // Add onerror fallback for local images too
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src="https://placehold.co/800x500/D1D5DB/1F2937?text=Image+Loading+Error"; }}
      />

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full ml-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 hover:bg-opacity-75"
        aria-label="Previous image"
      >
        {/* Left Arrow SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 hover:bg-opacity-75"
        aria-label="Next image"
      >
        {/* Right Arrow SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 w-2 rounded-full transition-all duration-300
              ${currentIndex === idx ? 'bg-white scale-125' : 'bg-gray-400 bg-opacity-75 hover:bg-opacity-100'}`}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;