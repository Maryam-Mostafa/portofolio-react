// // src/styles/GlobalStyles.tsx
// import React from 'react';

// const GlobalStyles: React.FC = () => (
//   <style>{`
//     @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

//     body {
//       font-family: 'Inter', sans-serif;
//     }

//     /* Blob Animation */
//     @keyframes blob {
//       0% {
//         transform: translate(0px, 0px) scale(1);
//       }
//       33% {
//         transform: translate(30px, -50px) scale(1.1);
//       }
//       66% {
//         transform: translate(-20px, 20px) scale(0.9);
//       }
//       100% {
//         transform: translate(0px, 0px) scale(1);
//       }
//     }
//     .animate-blob {
//       animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.3, 0.9);
//     }
//     .animation-delay-2000 {
//       animation-delay: 2s;
//     }
//     .animation-delay-4000 {
//       animation-delay: 4s;
//     }

//     /* Fade In Up Animation */
//     @keyframes fadeInMoveUp {
//       from {
//         opacity: 0;
//         transform: translateY(20px);
//       }
//       to {
//         opacity: 1;
//         transform: translateY(0);
//       }
//     }
//     .animate-fade-in-up {
//       animation: fadeInMoveUp 0.8s ease-out forwards;
//     }
//     .animation-delay-500 {
//       animation-delay: 0.5s;
//     }

//     /* Scale In Animation */
//     @keyframes scaleIn {
//       from {
//         opacity: 0;
//         transform: scale(0.9);
//       }
//       to {
//         opacity: 1;
//         transform: scale(1);
//       }
//     }
//     .animate-scale-in {
//       animation: scaleIn 0.6s ease-out forwards;
//     }

//     /* Basic Tailwind CSS setup - usually linked externally but included here for self-containment */
//     .container {
//       max-width: 1200px;
//     }
//   `}</style>
// );

// export default GlobalStyles;