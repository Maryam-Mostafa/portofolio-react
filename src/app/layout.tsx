// src/app/layout.tsx
// This file is a Server Component by default, which is appropriate for a root layout.
// It will define the <html> and <body> tags for your entire application.

import React, { ReactNode } from 'react';

// You would typically import and apply Tailwind CSS via a global CSS file (e.g., globals.css)
// and your tailwind.config.js for a proper Next.js setup.
// For the purpose of self-contained example with CDN, we include it directly.

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* Viewport for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Inter font import */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        {/* Custom styles for animations and global font */}
        <style>{`
          body {
            font-family: 'Inter', sans-serif;
          }

          /* Blob Animation */
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.3, 0.9);
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }

          /* Fade In Up Animation */
          @keyframes fadeInMoveUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fadeInMoveUp 0.8s ease-out forwards;
          }
          .animation-delay-500 {
            animation-delay: 0.5s;
          }

          /* Scale In Animation */
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-scale-in {
            animation: scaleIn 0.6s ease-out forwards;
          }

          /* Basic Tailwind CSS setup - usually linked externally but included here for self-containment */
          .container {
            max-width: 1200px;
          }
        `}</style>
      </head>
      <body className="font-inter text-gray-800 bg-gray-50 antialiased">
        {children} {/* This is where your page content will be rendered */}
        {/* Tailwind CSS CDN script - placed at the end of body for best practice with CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
      </body>
    </html>
  );
};

export default RootLayout;