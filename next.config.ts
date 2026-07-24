import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/corporate-hunts",
        destination: "/5-star-hunting-resort",
        permanent: true,
      },
      {
        source: "/5-star-african-hunts",
        destination: "/5-star-hunting-resort",
        permanent: true,
      },
      {
        source: "/budget-hunts",
        destination: "/4-star-exotics",
        permanent: true,
      },
      {
        source: "/trophy-exotics",
        destination: "/5-star-whitetail",
        permanent: true,
      },
      {
        source: "/free-range-big-game",
        destination: "/oklahoma-big-game",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
