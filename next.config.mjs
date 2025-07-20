/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  trailingSlash: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
};

export default nextConfig;
