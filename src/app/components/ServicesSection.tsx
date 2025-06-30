// src/components/ServicesSection.tsx
import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Comprehensive Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Service Card 1: Supplier Sourcing */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-blue-600 mb-6 text-5xl flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search h-16 w-16">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/>
                <path d="M21 21l-6 -6"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Supplier Sourcing</h3>
            <p className="text-gray-700 text-center">
              Connecting you with reliable and high-quality suppliers in China, with thorough due diligence to meet your standards.
            </p>
          </div>

          {/* Service Card 2: Quality Control */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-blue-600 mb-6 text-5xl flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-quality-mode h-16 w-16">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10.828 6.828a4 4 0 1 0 5.657 5.657l-1.926 1.926a6 6 0 0 1 -7.95 2.155l-2.072 -.345l.65 -3.993l1.884 -1.884a4 4 0 0 0 1.757 -3.736z"/>
                <path d="M12 21h8"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Quality Control & Assurance</h3>
            <p className="text-gray-700 text-center">
              Rigorous inspections and quality checks at the supplier&apos;s facility to ensure products meet your specifications.
            </p>
          </div>

          {/* Service Card 3: Logistics Coordination */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-blue-600 mb-6 text-5xl flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-truck-delivery h-16 w-16">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                <path d="M5 17h-2v-4m2 -4h14v-4h-10l-2 -2h-6z"/>
                <path d="M3 9l2 0"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Logistics Coordination</h3>
            <p className="text-gray-700 text-center">
              End-to-end logistics solutions, including warehousing, transportation, and efficient supply chain management.
            </p>
          </div>

          {/* Service Card 4: Customs and Documentation */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-blue-600 mb-6 text-5xl flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-invoice h-16 w-16">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"/>
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/>
                <path d="M9 7l0 12"/>
                <path d="M13 17l-4 0"/>
                <path d="M13 13l-4 0"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Customs & Documentation</h3>
            <p className="text-gray-700 text-center">
              Handling all customs and documentation processes, ensuring compliance and reducing delays.
            </p>
          </div>

          {/* Service Card 5: Market Access and Entry */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-blue-600 mb-6 text-5xl flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-world-latitude h-16 w-16">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/>
                <path d="M11 12h2m-6 0h.01m10 0h.01m-10 -4h10m-14 8h10"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Market Access & Entry</h3>
            <p className="text-gray-700 text-center">
              Assisting with market entry strategies and regulatory compliance, leveraging our deep regional expertise.
            </p>
          </div>

          {/* Service Card 6: Business Development Support */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-blue-600 mb-6 text-5xl flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-growth h-16 w-16">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 8l4 -4l4 4m-4 -4v10"/>
                <path d="M16 16l4 -4l4 4m-4 -4v10"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Business Development Support</h3>
            <p className="text-gray-700 text-center">
              Identifying new business opportunities and facilitating introductions to key stakeholders in your target markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;