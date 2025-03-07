/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Nécessaire si tu utilises les images Next.js
  },
};

module.exports = nextConfig;
