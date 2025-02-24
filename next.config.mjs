/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  basePath: "/itservices", // Important for GitHub Pages
};
module.exports = nextConfig;
