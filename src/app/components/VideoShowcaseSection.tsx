// src/components/VideoShowcaseSection.tsx
"use client"; // This component needs to be a client component for direct DOM manipulation (video playback controls, etc.)

import React from 'react';

const VideoShowcaseSection: React.FC = () => {
  return (
    <section id="videos" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Video Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Manufacturing Video - Using <video> tag for local file */}
          <div className="bg-gray-50 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Manufacturing Process</h3>
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <video
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="/public/manifacture-vid.mp4" // Assuming path from public folder
                title="Manufacturing Process Video"
                controls // Allows user to play/pause, unmute
                muted // Starts muted
                loop // Keeps repeating
                autoPlay // ADDED: Autoplays the video
                playsInline // Recommended for mobile autoplay behavior
                preload="metadata" // Loads just enough data to display the video, improving initial load
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-gray-700 text-center mt-4 text-sm">
              A glimpse into our efficient and high-quality manufacturing processes.
            </p>
          </div>

          {/* Labomo Product Video - Also using <video> tag for local file */}
          <div className="bg-gray-50 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Resent Product Labomo</h3>
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <video
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="/public/labobo.mp4" // Assuming path from public folder
                title="Resent Product Labomo"
                controls // Allows user to play/pause, unmute
                muted // Starts muted
                loop // Keeps repeating
                autoPlay // ADDED: Autoplays the video
                playsInline // Recommended for mobile autoplay behavior
                preload="metadata" // Loads just enough data to display the video, improving initial load
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-gray-700 text-center mt-4 text-sm">
              Discover our latest product the Labomo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcaseSection;