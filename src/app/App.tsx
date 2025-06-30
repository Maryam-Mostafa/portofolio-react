// // src/App.tsx
// import React, { useState, useEffect } from 'react';
// import { LanguageProvider } from './context/LanguageContext'; // Adjust path as needed
// import GlobalStyles from './styles/GlobalStyles'; // Adjust path as needed
// import Navbar from './components/Navbar'; // Adjust path as needed
// import HeroSection from './components/HeroSection'; // Adjust path as needed
// import AboutSection from './components/AboutSection'; // Adjust path as needed
// import ServicesSection from './components/ServicesSection'; // Adjust path as needed
// import PortfolioSection from './components/PortfolioSection'; // Adjust path as needed
// import VideoShowcaseSection from './components/VideoShowcaseSection'; // Adjust path as needed
// import WhyChooseUsSection from './components/WhyChooseUsSection'; // Adjust path as needed
// import Footer from './components/Footer'; // Adjust path as needed

// const App: React.FC = () => {
//   // State for managing active section in the navbar (for smooth scrolling/highlighting)
//   const [activeSection, setActiveSection] = useState<string>('home');
//   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // State for mobile menu

//   // Effect to handle scroll and update active section for navbar highlighting
//   useEffect(() => {
//     const handleScroll = () => {
//       // All sections on the page
//       const sections = ['home', 'about', 'services', 'portfolio', 'videos', 'why-us', 'footer-contact'];
//       for (const sectionId of sections) {
//         const section = document.getElementById(sectionId);
//         if (section) {
//           const rect = section.getBoundingClientRect();
//           // Check if the section is mostly in view
//           if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
//             setActiveSection(sectionId);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Initial check on load
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Function to scroll to a section
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setActiveSection(id);
//       setIsMenuOpen(false); // Close mobile menu after clicking a link
//     }
//   };

//   return (
//     <LanguageProvider> {/* Wrap the entire app with the LanguageProvider */}
//       <div className="font-inter text-gray-800 bg-gray-50 antialiased">
//         <GlobalStyles /> {/* Include global styles */}
//         <Navbar
//           activeSection={activeSection}
//           scrollToSection={scrollToSection}
//           isMenuOpen={isMenuOpen}
//           setIsMenuOpen={setIsMenuOpen}
//         />
//         <HeroSection />
//         <AboutSection />
//         <ServicesSection />
//         <PortfolioSection />
//         <VideoShowcaseSection />
//         <WhyChooseUsSection />
//         <Footer scrollToSection={scrollToSection} />

//         {/* Tailwind CSS CDN script for local testing without build process */}
//         {/* In a real React/Next.js project, Tailwind would be compiled via PostCSS */}
//         <script src="https://cdn.tailwindcss.com"></script>
//       </div>
//     </LanguageProvider>
//   );
// };

// export default App;