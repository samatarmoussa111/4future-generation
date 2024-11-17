/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://images.unsplash.com/",
      },
    ],
  },
};

export default nextConfig;
