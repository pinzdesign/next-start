/** @type {import('next').NextConfig} */

// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
	
//export const dynamic = "force-dynamic" 
//export const dynamic = "force-static"