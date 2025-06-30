// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for Static HTML Export (GitHub Pages)
  basePath: '/portofolio-react', // YOUR REPOSITORY NAME HERE
  assetPrefix: '/portofolio-react/', // Ensure assets load correctly
  images: {
    unoptimized: true, // Required for output: 'export' without a custom image loader
  },
};

module.exports = nextConfig;
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

