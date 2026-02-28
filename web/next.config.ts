import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vamshi-resume.netlify.app",
        pathname: "/assets/img/**",
      },
    ],
  },
};

export default nextConfig;
