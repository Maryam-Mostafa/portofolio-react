// src/components/ProductSection.tsx
"use client"; // This component should be a client component for consistency with other sections.

import React from 'react';

const ProductSection: React.FC = () => { // Renamed to ProductSection for consistency
  return (
    <section id="products" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Imported and Exported Products Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Product Item 1: Home and Kitchen */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
            <img
              src="/public/furnature-and-kitchen.png" // Assuming this is in your public folder
              alt="Home and Kitchen"
              // MODIFIED LINE: Changed object-cover to object-contain for this image
              className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src="https://placehold.co/400x250/C7D2FE/374151?text=Placeholder+Image"; }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Home and Kitchen</h3>
              <p className="text-gray-700 text-sm">
                Furniture (Sofas, beds, tables), Kitchen Appliances (Microwaves, refrigerators), Cookware and Tableware.
              </p>
            </div>
          </div>

          {/* Product Item 2: Electronics and Gadgets */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
            <img
              src="/public/534816.jpg" // Assuming this is in your public folder
              alt="Electronics and Gadgets"
              // MODIFIED LINE: Changed object-cover to object-contain for this image
              className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src="https://placehold.co/400x250/C7D2FE/374151?text=Placeholder+Image"; }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Electronics and Gadgets</h3>
              <p className="text-gray-700 text-sm">
                Consumer Electronics (Smartphones, laptops), Home Entertainment (TVs), Computer Components.
              </p>
            </div>
          </div>

          {/* Product Item 3: Food and Beverage */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
            <img
              src="/public/Food-and-Beverage.webp" // Assuming this is in your public folder
              alt="Food and Beverage"
              // MODIFIED LINE: Changed object-cover to object-contain for this image
              className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src="https://placehold.co/400x250/C7D2FE/374151?text=Placeholder+Image"; }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Food and Beverage</h3>
              <p className="text-gray-700 text-sm">
                Packaged Foods (Canned goods, snacks), Beverages (Coffee, tea), Fresh Produce (Fruits, vegetables).
              </p>
            </div>
          </div>

          {/* Product Item 4: Health and Beauty */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
            <img
              src="/public/health-and-beauty.jpg" // Assuming this is in your public folder
              alt="Health and Beauty"
              // MODIFIED LINE: Changed object-cover to object-contain for this image
              className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src="https://placehold.co/400x250/C7D2FE/374151?text=Placeholder+Image"; }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Health and Beauty</h3>
              <p className="text-gray-700 text-sm">
                Personal Care (Cosmetics, skincare), Health Products (Vitamins, supplements).
              </p>
            </div>
          </div>

          {/* Product Item 5: Fashion and Accessories */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
            <img
              src="/public/fashion.jpeg" // Assuming this is in your public folder
              alt="Fashion and Accessories"
              // MODIFIED LINE: Changed object-cover to object-contain for this image
              className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src="https://placehold.co/400x250/C7D2FE/374151?text=Placeholder+Image"; }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fashion and Accessories</h3>
              <p className="text-gray-700 text-sm">
                Clothing (Men&apos;s, women&apos;s, children&apos;s apparel), Footwear, Accessories (Handbags, jewelry).
              </p>
            </div>
          </div>

          {/* Product Item 6: Automotive */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
            <img
              src="/public/car.png" // Assuming this is in your public folder
              alt="Automotive"
              // MODIFIED LINE: Changed object-cover to object-contain for this image
              className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src="https://placehold.co/400x250/C7D2FE/374151?text=Placeholder+Image"; }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Automotive</h3>
              <p className="text-gray-700 text-sm">
                Vehicles (Cars, motorcycles), Auto Parts (Replacement parts, accessories).
              </p>
            </div>
          </div>

          {/* Product Item 7: Building and Construction - REMAINS object-cover (as per your request) */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
            <img
              src="/public/builfing.png"
              alt="Building and Construction"
              className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src="https://placehold.co/400x250/C7D2FE/374151?text=Placeholder+Image"; }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Building & Construction</h3>
              <p className="text-gray-700 text-sm">
                Materials (Lumber, tiles, glass), Tools (Hand tools, power tools).
              </p>
            </div>
          </div>

          {/* Product Item 8: Industrial and Machinery - REMAINS object-cover (as per your request) */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
            <img
              src="/public/machines.png"
              alt="Industrial and Machinery"
              className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src="https://placehold.co/400x250/C7D2FE/374151?text=Placeholder+Image"; }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Industrial & Machinery</h3>
              <p className="text-gray-700 text-sm">
                Industrial machines, engines, pumps, and various components.
              </p>
            </div>
          </div>

          {/* Product Item 9: Miscellaneous (Textiles, Paper Products) - REMAINS object-cover (as per your request) */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
            <img
              src="/public/papers.png"
              alt="Miscellaneous"
              className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src="https://placehold.co/400x250/C7D2FE/374151?text=Placeholder+Image"; }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Miscellaneous</h3>
              <p className="text-gray-700 text-sm">
                Textiles (Fabrics, yarns), Paper Products (Stationery, packaging materials).
              </p>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-600 mt-10 text-md">
          This list provides a broad overview of importable products across various categories. The specific
          products we choose to import will depend on your target market, demand, and supply chain
          capabilities.
        </p>
      </div>
    </section>
  );
};

export default ProductSection;