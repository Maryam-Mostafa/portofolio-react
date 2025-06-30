// src/components/AboutSection.tsx
"use client";

import React from 'react';
import ImageCarousel from './ImageCarousel'; // Import the new carousel component

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">About Eastflow Oceanic Supply Chain Co., Limited</h2>
        <div className="flex flex-col items-center">
          {/* ADJUSTED: Changed lg:w-11/12 to w-full to make it take full width of container */}
          <div className="w-full mb-10">
            <ImageCarousel />
          </div>
          {/* ADJUSTED: Changed lg:w-11/12 to w-full for text content */}
          <div className="w-full text-lg leading-relaxed text-gray-700">
            <p className="mb-6">
              Eastflow Oceanic Supply Chain Co., Limited (東鳴洲洋供應鏈有限公司) is a dynamic and innovative trading partner with a strong presence in both Hong Kong and Shenzhen. Our mission is to bridge the gap between global suppliers and the high-growth markets of the Middle East and North Africa, ensuring seamless trade and business expansion for our clients.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Strategic Network</h3>
            <p className="mb-6">
              Our strategic branches in key locations such as Dubai, Egypt, Saudi Arabia, Kuwait, and Oman allow us to provide unparalleled access to these vibrant and growing markets. By leveraging our deep regional expertise and extensive network, we ensure that your business can navigate the complexities of cross-border trade with ease.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Our Commitment & Vision</h3>
            <p>
              At Eastflow Oceanic Supply Chain Co., Limited, we are committed to helping your business achieve its vision. We believe that with the right network and support, any business can succeed on a global scale. What the company aspires to in the long term.
            </p>
          </div>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-8 mt-16 text-center">Our Key Features</h3>
        {/* ADJUSTED: Changed max-w-6xl to max-w-full to make it take full width of container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-full mx-auto">
          {/* Feature Item 1: Geographic Reach */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
            <div className="text-blue-600 mb-3 text-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-globe h-10 w-10">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/>
                <path d="M12 1.5v21"/>
                <path d="M20 10h-16"/>
                <path d="M20 14h-16"/>
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">Geographic Reach</h4>
            <p className="text-gray-700 text-sm">
              Localized support wherever you need it.
            </p>
          </div>

          {/* Feature Item 2: Simplicity */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
            <div className="text-blue-600 mb-3 text-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-sparkles h-10 w-10">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 16l-1.5 -1.5l-4.5 -7.5l2 -2l4 2l6 6l1 1l3 3l.5 .5"/>
                <path d="M17 3l-1 -1l-3 3l-1 1l-3 3l-1 1l-3 3l-1 1l-1 1l-1 1l-1 1"/>
                <path d="M17 3l-1 -1l-3 3l-1 1l-3 3l-1 1l-3 3l-1 1l-1 1l-1 1l-1 1"/>
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">Simplicity</h4>
            <p className="text-gray-700 text-sm">
              Streamlined processes for efficient operation.
            </p>
          </div>

          {/* Feature Item 3: Audience Appeal */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
            <div className="text-blue-600 mb-3 text-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-target-arrow h-10 w-10">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/>
                <path d="M13.435 18.995a9 9 0 1 0 -9.006 -9.006"/>
                <path d="M15 12h6"/>
                <path d="M12 15v6"/>
                <path d="M3 12h6"/>
                <path d="M12 3v6"/>
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">Audience Appeal</h4>
            <p className="text-gray-700 text-sm">
              Seamless sourcing for suppliers, market access for buyers.
            </p>
          </div>

          {/* Feature Item 4: Localized Trust */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
            <div className="text-blue-600 mb-3 text-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shield-check h-10 w-10">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 12l2 2l4 -4"/>
                <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"/>
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">Localized Trust</h4>
            <p className="text-gray-700 text-sm">
              Navigate unique challenges of each market with trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

