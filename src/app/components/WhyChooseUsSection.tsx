// src/components/WhyChooseUsSection.tsx
import React from 'react';

const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-20 md:py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Eastflow Oceanic?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Advantage 1: Global Reach and Strategic Network */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-blue-600 mb-6 text-5xl flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin-dollar h-16 w-16">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/>
                <path d="M12.783 21.326l-.783 -.326l-4 -2l-4 2v-12a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v7"/>
                <path d="M21 15h-2.5a1.5 1.0 0 0 0 0 3h1a1.5 1.0 0 0 1 0 3h-2.5"/>
                <path d="M19 21v1m0 -8v1"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Global Reach & Strategic Network</h3>
            <p className="text-gray-700 text-center">
              Robust global presence with strategic branches in Dubai, Egypt, Saudi Arabia, Kuwait, and Oman.
            </p>
          </div>

          {/* Advantage 2: Deep Regional Expertise */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-blue-600 mb-6 text-5xl flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-compass h-16 w-16">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M8 16l2 -6l6 -2l-2 6l-6 2"/>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/>
                <path d="M12 3v.01m0 17v.01m3 -10h.01m-6 0h.01"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Deep Regional Expertise</h3>
            <p className="text-gray-700 text-center">
              Our team understands unique regulatory requirements, cultural nuances, and market dynamics of the Middle East and North Africa.
            </p>
          </div>

          {/* Advantage 3: Quality Control and Assurance */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-blue-600 mb-6 text-5xl flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-check h-16 w-16">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/>
                <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"/>
                <path d="M9 14l2 2l4 -4"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Quality Control & Assurance</h3>
            <p className="text-gray-700 text-center">
              Rigorous quality control processes and thorough inspections at the supplier&apos;s facility.
            </p>
          </div>

          {/* Advantage 4: Comprehensive Logistics Solutions */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-blue-600 mb-6 text-5xl flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-route h-16 w-16">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 17l4 4l4 -14l5 14l4 -4"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Comprehensive Logistics</h3>
            <p className="text-gray-700 text-center">
              End-to-end logistics solutions including warehousing, transportation, customs clearance, and delivery.
            </p>
          </div>

          {/* Advantage 5: Customized Sourcing Solutions */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-blue-600 mb-6 text-5xl flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-settings-code h-16 w-16">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M11.103 17.848a1.996 1.996 0 0 0 -.103 .152a2 2 0 0 0 2 2h.11c.717 0 1.294 .493 1.725 1.138m1.966 -4.846a2 2 0 1 0 2.828 -2.828a2 2 0 0 0 -2.828 -2.828l-1.964 1.964"/>
                <path d="M12 18l-2 2l-2 -2"/>
                <path d="M12 12v.01"/>
                <path d="M10 12l2 2l2 -2"/>
                <path d="M9 12l-2 2l-2 -2"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Customized Sourcing Solutions</h3>
            <p className="text-gray-700 text-center">
              Tailored sourcing solutions to your specific needs, connecting you with the best suppliers in China.
            </p>
          </div>

          {/* Advantage 6: Strong Supplier Relationships */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-blue-600 mb-6 text-5xl flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-handshake h-16 w-16">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M15 11v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2c-.394 0 -.754 -.163 -1 -.456l-3 -3v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4c.246 -.293 .606 -.456 1 -.456h2a1 1 0 0 1 1 1v2c.394 0 .754 .163 1 .456l3 3v-4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-4c-.246 .293 -.606 .456 -1 .456z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Strong Supplier Relationships</h3>
            <p className="text-gray-700 text-center">
              Established long-standing relationships with reliable suppliers for consistent access to high-quality products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;